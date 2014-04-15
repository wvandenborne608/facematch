Crafty.c("scene_gamescene_grid", {
    init: function(){
    },
    display: function(){
      var game_scene_grid_width = 440;
      var game_scene_grid_height = 440;
      Crafty.sprite(game_scene_grid_width, game_scene_grid_height, "assets/img/gamescene_grid.png", {gamescene_grid: [0, 0]});
      var game_scene_grid = Crafty.e('2D, Canvas, Tween, Tweener, gamescene_grid')
       .attr({alpha: 0.0, x: Game.grid.position.x, y: Game.grid.position.y})
       .tween({alpha: 1.0}, 20)
    },
    remove: function(){
      var game_scene_grid_width = 440;
      var game_scene_grid_height = 440;
      Crafty.sprite(game_scene_grid_width, game_scene_grid_height, "assets/img/gamescene_grid.png", {gamescene_grid: [0, 0]});
      var game_scene_grid = Crafty.e('2D, Canvas, Tween, Tweener, gamescene_grid')
       .attr({alpha: 1.0, x: Game.grid.position.x, y: Game.grid.position.y})
       .tween({alpha: 0.0}, 20)
    },
});


Crafty.c("scene_gamescene_leftbar", {
    init: function(){
    },
    display: function(){
      var game_scene_leftbar_width = 140;
      var game_scene_leftbar_height = 440;
      Crafty.sprite(game_scene_leftbar_width, game_scene_leftbar_height, "assets/img/gamescene_leftbar.png", {gamescene_leftbar: [0, 0]});
      var game_scene_leftbar = Crafty.e('2D, Canvas, Tween, Tweener, gamescene_leftbar')
       .attr({alpha: 0.0, x: -game_scene_leftbar_width, y: 0})
       .addTween({x: 0}, 'easeOutExpo', 20)
       .tween({alpha: 1.0}, 20)
    },
    remove: function(){
      var game_scene_leftbar_width = 140;
      var game_scene_leftbar_height = 440;
      Crafty.sprite(game_scene_leftbar_width, game_scene_leftbar_height, "assets/img/gamescene_leftbar.png", {gamescene_leftbar: [0, 0]});
      var game_scene_leftbar = Crafty.e('2D, Canvas, Tween, Tweener, gamescene_leftbar')
       .attr({alpha: 1.0, x: 0, y: 0})
       .addTween({x: -game_scene_leftbar_width}, 'easeOutExpo', 20)
       .tween({alpha: 0.0}, 20)
    },
});


Crafty.c("scene_gamescene_rightbar", {
    init: function(){
    },
    display: function(){
      var game_scene_rightbar_width = 140;
      var game_scene_rightbar_height = 440;
      Crafty.sprite(game_scene_rightbar_width, game_scene_rightbar_height, "assets/img/gamescene_rightbar.png", {gamescene_rightbar: [0, 0]});
      var game_scene_rightbar = Crafty.e('2D, Canvas, Tween, Tweener, gamescene_rightbar')
       .attr({alpha: 0.0, x: Game.canvas.width, y: 0})
       .addTween({x: Game.canvas.width-game_scene_rightbar_width}, 'easeOutExpo', 20)
       .tween({alpha: 1.0}, 20)
    },
    remove: function(){
      var game_scene_rightbar_width = 140;
      var game_scene_rightbar_height = 440;
      Crafty.sprite(game_scene_rightbar_width, game_scene_rightbar_height, "assets/img/gamescene_rightbar.png", {gamescene_rightbar: [0, 0]});
      var game_scene_rightbar = Crafty.e('2D, Canvas, Tween, Tweener, gamescene_rightbar')
       .attr({alpha: 1.0, x: Game.canvas.width-game_scene_rightbar_width, y: 0})
       .addTween({x: Game.canvas.width}, 'easeOutExpo', 20)
       .tween({alpha: 0.0}, 20)
    },
});
