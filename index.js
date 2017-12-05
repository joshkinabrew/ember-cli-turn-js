/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-turnjs',

  included: function(app) {
    this._super.included(app);
    this.app.import('vendor/turn.js');
  }
};
