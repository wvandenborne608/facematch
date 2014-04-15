// Generic button to open a scene with a fancy disappear effect when pressed upon.
Crafty.c("button_type1", {
    init: function(){
      this.requires('2D, Canvas, SpriteAnimation, Tween, Tweener, Mouse');
    },
    show: function(xpos, ypos, sprite_id, scene_to_open){
      this.requires(sprite_id)
          .animate("over", [ [ 0, 1 ] ])
          .animate("press", [ [ 0, 2 ] ])
          .animate("release", [ [ 0, 0 ] ])
          .attr({ alpha: 0.1, x: xpos, y : ypos })
          .tween({alpha: 1.0}, 4);
      this.bind('MouseOver', function() { this.animate("over", 1, 0);    })
      this.bind('MouseDown', function() { this.animate("press", 1, 0);   })
      this.bind('MouseOut',  function() { this.animate("release", 1, 0); })
      this.bind('MouseUp',   function() { this.animate("release", 1, 0); })
      this.bind('Click',     function() {
        Crafty.scene( scene_to_open ); 
      });
    },
    disappear: function(xpos, ypos, sprite_id, xpos_removed, ypos_removed, speed){
      this.requires(sprite_id)
          .attr({ alpha: 1.0, x: xpos, y : ypos })
          .tween({alpha: 0.0}, 5)
          .addTween({x: xpos_removed, y: ypos_removed}, 'easeOutExpo', speed);
    }
});


// Generic show title (graphic) with dissappear effect
Crafty.c("showtitle_type1", {
    init: function(){
      this.requires('2D, Canvas, Tween, Tweener');
    },
    show: function(xpos_start, ypos_start, xpos_end, ypos_end, sprite_id, speed){
      this.requires(sprite_id)
          .attr({alpha: 0.0, x: xpos_start, y: ypos_start})
          .addTween({x: xpos_end, y: ypos_end}, 'easeOutExpo', speed)
          .tween({alpha: 1.0}, speed)
    },
    disappear: function(xpos_start, ypos_start, xpos_end, ypos_end, sprite_id, speed){
      this.requires(sprite_id)
          .attr({alpha: 1.0, x: xpos_start, y: ypos_start})
          .addTween({x: xpos_end, y: ypos_end}, 'easeOutExpo', speed)
          .tween({alpha: 0.0}, speed)
    }
});

// Show a transparent background effect
Crafty.c("showtransparentgradient_type1", {
    init: function(){
      this.requires('2D, Canvas, Tween')
    },
    show: function(sprite_id, speed){
      this.requires(sprite_id)
       .attr({alpha: 0.0, x: 0, y: 0})
       .tween({alpha: 1.0}, speed)
    },
    disappear: function(sprite_id, speed){
      this.requires(sprite_id)
       .attr({alpha: 0.0, x: 0, y: 0})
       .tween({alpha: 0.0}, speed)
    },
});