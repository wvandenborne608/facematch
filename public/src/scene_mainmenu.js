// Game scene
// -------------
Crafty.scene('Mainmenu', function() {
  Crafty.e("showtitle_type1").show((Game.canvas.width / 2) - (356/2), -63, (Game.canvas.width / 2) - (356/2), 20, "title_mainmenu", 20); //show title graphic

  Crafty.e("Delay").delay(function() { // show button "Play" with a short entrance delay as extra bling 
    Crafty.e("button_type1").show((Game.canvas.width / 2) - (129/2), 120, "btn_mainmenu_play", "Gamescene")
  }, 300, 0);  
  
  Crafty.e("Delay").delay(function() { // show button "Scores"
    Crafty.e("button_type1").show((Game.canvas.width / 2) - (129/2), 190, "btn_mainmenu_scores", "Scores")
  }, 400, 0);  

  Crafty.e("Delay").delay(function() { // show button "About"
    Crafty.e("button_type1").show((Game.canvas.width / 2) - (129/2), 260, "btn_mainmenu_about", "About")
  }, 500, 0);  

}, function() {
  Crafty.e("showtitle_type1").disappear((Game.canvas.width / 2) - (356/2), 20, (Game.canvas.width / 2) - (356/2), -63, "title_mainmenu", 20); //remove title graphic
  Crafty.e("button_type1").disappear((Game.canvas.width / 2) - (129/2), 120, "btn_mainmenu_play",   -129, 120, 20) //remove button "Play"
  Crafty.e("button_type1").disappear((Game.canvas.width / 2) - (129/2), 190, "btn_mainmenu_scores", Game.canvas.width+129, 190, 20) //remove button "Scores"
  Crafty.e("button_type1").disappear((Game.canvas.width / 2) - (129/2), 260, "btn_mainmenu_about", -129, 260, 20) //remove button "About"
});
