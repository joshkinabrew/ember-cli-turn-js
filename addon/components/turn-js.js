import Ember from 'ember';
import layout from '../templates/components/turn-js';

export default Ember.Component.extend({
  acceleration: true,
  autoCenter: true,
  direction: 'ltr',
  display: 'double',
  duration: 600,
  gradients: true,
  height: null,
  width: null,
  elevation: 0,
  page: 1,
  pages: null,
  isTurning: false,
  turnCorners: 'bl,br',
  when: null,
  animating: false,

  _initializeTurnJS: Ember.on('didInsertElement', function() {
    var _this = this;
    return this.$().turn({
      acceleration    : this.get('acceleration'),
      autoCenter      : this.get('autoCenter'),
      direction       : this.get('direction'),
      display         : this.get('display'),
      duration        : this.get('duration'),
      gradients       : this.get('gradients'),
      height          : this.get('height'),
      width           : this.get('width'),
      elevation       : this.get('elevation'),
      page            : this.get('page'),
      turnCorners     : this.get('turnCorners'),
      pages           : this.get('pages'),
      when            : this.get('when'),
      animating       : this.get('animating')
    })
    .on('start', function (event, pageObject, corner) {
      _this.sendAction('start', pageObject, corner);
    })
    .on('turning', function (event, page, view) {
      _this.sendAction('turning', page, view);
    })
    .on('turned', function (event, page, view) {
      _this.sendAction('turned', page, view);
    })
    .on('end', function (event, pageObject, turned) {
      _this.sendAction('turned', pageObject, turned);
    })
    .on('first', function (event) {
      _this.sendAction('first');
    })
    .on('last', function (event) {
      _this.sendAction('last');
    })
    .on('missing', function (event, pages) {
      _this.sendAction('missing', pages);
    })
    .on('zooming', function (event, newZoomValue, currentZoomValue) {
      _this.sendAction('zooming', newZoomValue, currentZoomValue);
    })
  })

});
