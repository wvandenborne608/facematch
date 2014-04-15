Crafty.c('Score', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text("test");
    this.attr({
      x: 600,
      y: 75,
      w: 100,
      z: 200
    }).textFont({ size: '16px', weight: 'bold' }).css({'text-align': 'right'});
  },
  render: function(score) {
    return this.text(score);
  }
});