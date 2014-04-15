// Gameover scene
// -------------
Crafty.scene('Gameover', function() {
  Crafty.e("showtransparentgradient_type1").show("background_gradient", 20);
  Crafty.e("showtitle_type1").show((Game.canvas.width / 2) - (296/2), -73, (Game.canvas.width / 2) - (296/2), 20, "title_timeup", 20); //show title graphic

  Crafty.e("Delay").delay(function() { // show button "Play" with a short entrance delay as extra bling 
    Crafty.e("button_type1").show((Game.canvas.width / 2) - (129/2), Game.canvas.height - 62 - 20, "btn_mainmenu_back", "Mainmenu")
  }, 300, 0);  

}, function() {
  Crafty.e("showtransparentgradient_type1").disappear("background_gradient", 20);
  Crafty.e("showtitle_type1").disappear((Game.canvas.width / 2) - (296/2), 20, (Game.canvas.width / 2) - (296/2), -73, "title_timeup", 20); //remove title graphic
  Crafty.e("button_type1").disappear((Game.canvas.width / 2) - (129/2), Game.canvas.height - 62 - 20, "btn_mainmenu_back", (Game.canvas.width / 2) - (129/2), Game.canvas.height, 20) //remove button 
});
