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


Crafty.c('GameTimerDisplay', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text(Math.round(((Game.timing.totalTimer) / 1000)));
    this.attr({
      x: 60,
      y: 75,
      w: 20,
      z: 200
    }).textFont({ color: '#000000', size: '16px', weight: 'bold' }).css({'text-align': 'right', 'color':'#000000' });
  },
  render: function(seconds) {
    return this.text(seconds);
  }
});


Crafty.c('GameTimerTicker', {
  init: function() {
    this.requires('GameTimerDisplay');
  },
  run: function(seconds) {
    var startTime = new Date().getTime();
    var that = this;
    Game.timing.timer = setInterval(function() {
      var timePassed = new Date().getTime() - startTime;
      that.render(Math.round(((Game.timing.totalTimer) - (timePassed))/1000));
      if (Game.timing.totalTimer <= timePassed) {
        clearTimeout(Game.timing.timer); 
        Crafty.scene('Gameover');
      }
    }, 1000);
  }
});



Crafty.c('CountdownTimerDisplay', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text(Math.round(((Game.timing.countdownTimer) / 1000)));
    this.attr({
      x: 350,
      y: 120,
      w: 20,
      z: 200
    }).css({'text-align': 'right', 'color':'#000000', 'fontSize':'40px' });
  },
  render: function(seconds) {
    return this.text(seconds);
  }
});


Crafty.c('CountdownTimerTicker', {
  init: function() {
    this.requires('CountdownTimerDisplay');
  },
  run: function(seconds) {
    var startTime = new Date().getTime();
    var that = this;
    Game.timing.timer = setInterval(function() {
      var timePassed = new Date().getTime() - startTime;
      that.render(Math.round(((Game.timing.countdownTimer) - (timePassed))/1000));
      if (Game.timing.countdownTimer <= timePassed) {
        clearTimeout(Game.timing.timer); 
        that.render("");
        var timer = Crafty.e("GameTimerTicker").run();
        var match3 = Crafty.e("Match3");
        match3.createEmptyGrid();
        match3.fillGrid();
        match3.appearPieces();
        Game.score.totalScoreTextElement = Crafty.e("Score");
        Game.score.totalScoreTextElement.render(Game.score.totalScore);
      }
    }, 1000);
  }
});


Crafty.c('HighScoresNumbers', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text("1.<br>2.<br>3.<br>4.<br>5.<br>6.<br>7.<br>8.<br>9.<br>10.<br>");
    this.attr({
      x: 70,
      y: 100,
      w: 30,
      z: 200
    }).css({'text-align': 'left', 'color':'#000000', 'fontSize':'18px' });
  }
});

Crafty.c('HighScoresNames', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text("...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>");
    this.attr({
      x: 100,
      y: 100,
      w: 30,
      z: 200
    }).css({'text-align': 'left', 'color':'#000000', 'fontSize':'18px' });
  }
});

Crafty.c('HighScoresScores', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text("100.000<br>90.000<br>80.000<br>70.000<br>60.000<br>50.000<br>40.000<br>30.000<br>20.000<br>10.000<br>");
    this.attr({
      x: 300,
      y: 100,
      w: 30,
      z: 200
    }).css({'text-align': 'right', 'color':'#000000', 'fontSize':'18px' });
  }
});

Crafty.c('HighScoresPrices', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text("&euro;10 to add your score here*<br/>&euro;9 to add your score here*<br/>&euro;8 to add your score here*<br/>&euro;7 to add your score here*<br/>&euro;6 to add your score here*<br/>&euro;5 to add your score here*<br/>&euro;4 to add your score here*<br/>&euro;3 to add your score here*<br/>&euro;2 to add your score here*<br/>&euro;1 to add your score here*<br/>");
    this.attr({
      x: 370,
      y: 100,
      w: 330,
      z: 200
    }).css({'text-align': 'right', 'color':'#666666', 'fontSize':'18px' });
  }
});

Crafty.c('HighScoresInstructions', {
  init: function() {
    var self;
    this.requires('2D, DOM, Text');
    this.text("*Want to add your highscore here? Send me you score (and the cash) and I'll add you to the list ;)");
    this.attr({
      x: 20,
      y: 330,
      w: 700,
      z: 200
    }).css({'text-align': 'left', 'color':'#000000', 'fontSize':'16px' });
  }
});