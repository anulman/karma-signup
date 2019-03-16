import SegmentAdapter from 'ember-metrics/metrics-adapters/segment';

import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { next, schedule } from '@ember/runloop';
import { task, timeout, waitForProperty } from 'ember-concurrency';

export default SegmentAdapter.extend({
  fingerprintjs: service(),
  raven: service(),

  init() {
    this._super(...arguments);
    this.get('waitForFingerprint').perform();
  },

  isReady: false,
  waitForFingerprint: task(function *() {
    if (typeof FastBoot === 'undefined' && !this.get('isReady')) {
      yield waitForProperty(this.get('fingerprintjs'), 'fingerprint');

      let { raven } = this.getProperties('raven');
      let { result } = this.get('fingerprintjs.fingerprint');

      registerRaven(raven, result);

      while (typeof get(window, 'analytics.user') !== 'function') {
        yield timeout(1);
      }

      registerClientAnonymousId(result);
      this.set('isReady', true);
    }
  }),

  alias: ensureFingerprintBefore('alias'),
  identify: ensureFingerprintBefore('identify'),
  trackEvent: ensureFingerprintBefore('trackEvent'),
  trackPage: ensureFingerprintBefore('trackPage')
});

function ensureFingerprintBefore(funcName) {
  return function (...args) {
    if (!this.get('isReady')) {
      next(this, schedule, 'afterRender', this, funcName, ...args);
    } else {
      this._super(...args);
    }
  }
}

function registerClientAnonymousId(id) {
  window.analytics.user().anonymousId(id);
}

function registerRaven(raven, id) {
  // n.b. handle sentry separately since its client is wrapped by an ember service
  raven.callRaven('setUserContext', { id });
}
