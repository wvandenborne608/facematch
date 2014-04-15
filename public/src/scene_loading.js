// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files
Crafty.scene('Loading', function(){
  var loading_text = Crafty.e('2D, Canvas, Text, Mouse')
    .text('Loading...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() });

  Crafty.load([ "assets/img/button_about.png", 
                "assets/img/button_back.png",
                "assets/img/button_continue.png",
                "assets/img/button_exit.png",
                "assets/img/button_play.png",
                "assets/img/button_scores.png",
                "assets/img/gamescene_grid.png",
                "assets/img/gamescene_leftbar.png",
                "assets/img/gamescene_rightbar.png",
                "assets/img/main_background.png",
                "assets/img/title_about.png",
                "assets/img/title_mainmenu.png",
                "assets/img/title_scores.png",
                "assets/img/title_timeup.png",
                "assets/img/pieces.png",
                "assets/img/transparentgradient_background.png"
              ],

    // on load finish
    function() {
      loading_text.text('Done!');

      Crafty.sprite( 129, 48, "assets/img/button_about.png",    {"btn_mainmenu_about":    [0,0]} ); //assign sprite
      Crafty.sprite( 129, 48, "assets/img/button_back.png",     {"btn_mainmenu_back":     [0,0]} ); //assign sprite
      Crafty.sprite( 129, 48, "assets/img/button_continue.png", {"btn_mainmenu_continue": [0,0]} ); //assign sprite
      Crafty.sprite( 129, 48, "assets/img/button_exit.png",     {"btn_mainmenu_exit":     [0,0]} ); //assign sprite
      Crafty.sprite( 129, 48, "assets/img/button_play.png",     {"btn_mainmenu_play":     [0,0]} ); //assign sprite
      Crafty.sprite( 129, 48, "assets/img/button_scores.png",   {"btn_mainmenu_scores":   [0,0]} ); //assign sprite
      Crafty.sprite( 356, 63, "assets/img/title_mainmenu.png",  {"title_mainmenu":        [0, 0]});
      Crafty.sprite( 220, 62, "assets/img/title_scores.png",    {"title_scores":          [0, 0]});
      Crafty.sprite( 220, 62, "assets/img/title_about.png",     {"title_about":           [0, 0]});
      Crafty.sprite( 296, 73, "assets/img/title_timeup.png",    {"title_timeup":          [0, 0]});
      Crafty.sprite(720, 440, "assets/img/transparentgradient_background.png", {"background_gradient": [0, 0]});

      Crafty.sprite(55, 'assets/img/pieces.png', {
        spr_pieces:  [0, Game.piece.properties.totalTypes],
      }, 0, 0);

      //Crafty.sprite(55, 'assets/img/pieces.png', { spr_pieces:  [0, 0, Game.pieceWidth * Game.maxpieces, Game.pieceHeight] });

      Crafty.sprite(720, 440, "assets/img/main_background.png", {mainmenu_background: [0, 0]});

      Crafty.e('2D, Canvas, Tween, mainmenu_background')
       .attr({alpha: 0.0})
       .tween({alpha: 1.0}, 20)
      Crafty.e("Delay").delay(function() {
          Crafty.background("url('assets/img/main_background.png')");
          Crafty.scene('Mainmenu');
      }, 500, 0);
    },

    // on load progress
    function(e) {
        // Optional todo
    },

    // on error
    function(e) {
        alert("error preloading assets");
    });

});