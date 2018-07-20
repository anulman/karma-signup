import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  application: controller(),
  metrics: service(),

  focusForm(trigger) {
    this.get('metrics').trackEvent('Segment', {
      event: 'click-to-focus',
      source: `wefc:${trigger}`
    });

    document.querySelector('input').focus();
    window.scrollTo(0, 0);
  }
});
