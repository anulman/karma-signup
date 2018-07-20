import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';

import md5 from 'md5';

import share from '../../utils/share';

const Validations = buildValidations({
  name: validator('format', {
    regex: /[a-zA-Z]+( [a-zA-Z]+)+/,
    message: 'This field must include first and last names'
  }),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default Controller.extend(Validations, {
  fingerprintjs: service(),
  firebase: service(),
  metrics: service(),
  router: service(),

  name: '',
  email: '',
  didSubmit: computed(function() {
    return typeof FastBoot === 'undefined' && localStorage.getItem('didSubmit');
  }),

  share(application, { platform, source } = {}) {
    application.get('metrics').trackEvent('Segment', {
      event: 'share',
      platform,
      source
    });

    share(platform);
  },

  submit(application, { name, email } = {}) {
    let distinctId = md5(email);
    let metrics = application.get('metrics');

    metrics.identify('Segment', { distinctId, name, email });
    metrics.trackEvent('Segment', { event: 'signup' });

    application.set('didSubmit', true);
    localStorage.setItem('didSubmit', true);
  }
});
