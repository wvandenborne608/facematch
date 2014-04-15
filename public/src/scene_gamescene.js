// Game scene
// -------------
Crafty.scene('Gamescene', function() {
  Crafty.e("scene_gamescene_leftbar").display();
  Crafty.e("scene_gamescene_rightbar").display();
  Crafty.e("scene_gamescene_grid").display();

  Crafty.e("Delay").delay(function() { // show button "Play" with a short entrance delay as extra bling 
    Crafty.e("button_type1").show(5, Game.canvas.height - 48 - 20, "btn_mainmenu_exit", "Gameover")
  }, 300, 0);  

  var timerText_shadow = Crafty.e("2D, DOM, Text").attr({ x: 61, y: 76}).textFont({family: 'Courier New',  size: '36px', weight: 'bold'}).textColor("#FFFFFF").text((Game.timing.totalTimer / 1000));
  var timerText        = Crafty.e("2D, DOM, Text").attr({ x: 60, y: 75}).textFont({family: 'Courier New',  size: '36px', weight: 'bold'}).textColor("#000000").text((Game.timing.totalTimer / 1000));

  var startTime = new Date().getTime();
  Game.timing.timer = setInterval(function() {
      var timePassed = new Date().getTime() - startTime;
      timerText_shadow.text( Math.round(((Game.timing.totalTimer) - (timePassed))/1000) ) ;
      timerText.text( Math.round(((Game.timing.totalTimer) - (timePassed))/1000) ) ;
      if (Game.timing.totalTimer <= timePassed) {
        clearTimeout(Game.timing.timer); 
        Crafty.scene('Gameover');
      }
  }, 1000);


  var match3 = Crafty.e("Match3");
  match3.createEmptyGrid();
  match3.fillGrid();
  match3.appearPieces();

  Game.score.totalScoreTextElement = Crafty.e("Score");
  Game.score.totalScoreTextElement.render(Game.score.totalScore);

}, function() {
  clearInterval(Game.timing.timer);
  Crafty.e("scene_gamescene_leftbar").remove();
  Crafty.e("scene_gamescene_rightbar").remove();
  Crafty.e("scene_gamescene_grid").remove();
  Crafty.e("button_type1").disappear(5, Game.canvas.height - 48 - 20, "btn_mainmenu_exit",   5, Game.canvas.height+60, 20)
});
