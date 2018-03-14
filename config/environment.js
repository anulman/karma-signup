'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'karma-signup',
    podModulePrefix: 'karma-signup/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    metricsAdapters: [{
      name: 'GoogleAnalytics',
      environments: ['development', 'production'],
      config: {
        id: 'UA-57942215-1',
        debug: environment === 'development',
        trace: environment === 'development',
        sendHitTask: environment !== 'development'
      },
    }, {
      name: 'Segment',
      environments: ['production'],
      config: {
        key: 'BUfXIjvNXZbqj9PFnofOL1t8ZQaHlKh4'
      }
      // todo do we have facebook pixel?
    // }, {
      // name: 'FacebookPixel',
      // environments: ['production'],
      // config: {
        // id: ''
      // }
    }],

    sentry: {
      dsn: 'https://d2c7984596214f0694da81ca20dc8e90@sentry.io/303935'
    },

    firebase: {
      apiKey: "AIzaSyBkk_vXl136w9P-7CpEOksiTo8hk81ceOU",
      authDomain: "karma-signups.firebaseapp.com",
      databaseURL: "https://karma-signups.firebaseio.com",
      projectId: "karma-signups",
      storageBucket: "karma-signups.appspot.com",
      messagingSenderId: "576293640418"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.sentry.development = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV['ember-full-story'] = {
      enabledEnvironments: ['production'],
      host: 'www.fullstory.com',
      namespace: 'FS',
      org: 'B22AD'
    }
  }

  return ENV;
};
