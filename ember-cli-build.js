'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false,
      'insertEmberWormholeElementToDom': true
    },
    prember: {
      baseRoot: 'https://karmacoop.org',
      urls: [
        '/'
      ]
    }
  });

  app.import('node_modules/firebase/firebase.js');
  app.import('node_modules/firebase/firebase-firestore.js');

  return app.toTree();
};
