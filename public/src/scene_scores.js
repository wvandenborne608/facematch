// Scores scene
// -------------
Crafty.scene('Scores', function() {
  Crafty.e("showtitle_type1").show((Game.canvas.width / 2) - (220/2), -62, (Game.canvas.width / 2) - (220/2), 20, "title_scores", 20); //show title graphic

  Crafty.e("Delay").delay(function() { // show button "Play" with a short entrance delay as extra bling 
    Crafty.e("button_type1").show((Game.canvas.width / 2) - (129/2), Game.canvas.height - 62 - 20, "btn_mainmenu_back", "Mainmenu")
  }, 300, 0);  

  Crafty.e("HighScoresNumbers");
  Crafty.e("HighScoresNames");
  Crafty.e("HighScoresScores");
  Crafty.e("HighScoresPrices");
  Crafty.e("HighScoresInstructions");
  


}, function() {
  Crafty.e("showtitle_type1").disappear((Game.canvas.width / 2) - (220/2), 20, (Game.canvas.width / 2) - (220/2), -62, "title_scores", 20); //remove title graphic
  Crafty.e("button_type1").disappear((Game.canvas.width / 2) - (129/2), Game.canvas.height - 62 - 20, "btn_mainmenu_back", (Game.canvas.width / 2) - (129/2), Game.canvas.height, 20) //remove button 
});

