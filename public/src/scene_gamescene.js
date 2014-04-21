// Game scene
// -------------
Crafty.scene('Gamescene', function() {
  Crafty.e("scene_gamescene_leftbar").display();
  Crafty.e("scene_gamescene_rightbar").display();
  Crafty.e("scene_gamescene_grid").display();

  Crafty.e("Delay").delay(function() { // show button "Play" with a short entrance delay as extra bling 
    Crafty.e("button_type1").show(5, Game.canvas.height - 48 - 20, "btn_mainmenu_exit", "Gameover")
  }, 300, 0);  

  Game.score.totalScore=0; //set (or reset) the score.
  Crafty.e("CountdownTimerTicker").run(); //do the countdown and then start the game

}, function() {
  clearInterval(Game.timing.timer);
  Crafty.e("scene_gamescene_leftbar").remove();
  Crafty.e("scene_gamescene_rightbar").remove();
  Crafty.e("scene_gamescene_grid").remove();
  Crafty.e("button_type1").disappear(5, Game.canvas.height - 48 - 20, "btn_mainmenu_exit",   5, Game.canvas.height+60, 20)
});
