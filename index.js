/* jshint node: true */
'use strict';

module.exports = {
  name: 'turnjs',

  included: function(app) {
    this._super.included(app);
    this.app.import('vendor/turn.js');
  }
};
