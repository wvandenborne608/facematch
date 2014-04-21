var match3 = match3_engine;


Game = {
  canvas:{
  	width: 720,
  	height: 440
  },
  timing: {
    timer : 0,
    totalTimer : 60000,
    countdownTimer : 3000
  },
  grid: {
    position:   { x: 140, y: 0 },
    dimensions: { x: 8,   y: 8 },
    gridArray:  new Array(7)
  },
  piece: { 
    properties: {
      width: 55,
      height: 55,
      totalTypes: 7, 
      swapSpeed: 15,
      dropSpeed: 30,
      disapearSpeed: 40
    },
    selectedPiece: { x:-1, y:-1 },
    piecesArray:  new Array(7)
  },
  states: {
    dragging:false,
    dragPreviousPosition: {
      x: -1,
      y: -1
    },
    dropping: 0, 
  },
  score: { 
    totalScore: 0,
    totalScoreTextElement: null
  },

  // The total width of the game screen.
  width: function() {
    return this.canvas.width;
  },

  // The total height of the game screen.
  height: function() {
    return this.canvas.height;
  },

  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.mobile = false;
    Crafty.init(Game.width(), Game.height());
    Crafty.background('#002a73');
    // Simply start the "Loading" scene to get things going
    Crafty.scene('Loading');
  }
}