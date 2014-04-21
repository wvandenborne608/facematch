Crafty.c('Piece', {
  init: function() {
    this.requires('2D, Canvas, SpriteAnimation, spr_pieces, Mouse, Tweener, Tween');
    this.selectedFlag=false;
  },
  gridPosToPixelsX: function(x) {
    return ((x * Game.piece.properties.width) + Game.grid.position.x);
  },
  gridPosToPixelsY: function(y) {
    return ((y * Game.piece.properties.width) + Game.grid.position.y);
  },
  show: function(xPos, yPos, pieceType){
  	this.xPos = xPos;
  	this.yPos = yPos;
    this.attr({x:this.gridPosToPixelsX(this.xPos),y:this.gridPosToPixelsY(this.yPos)})
      .sprite(pieceType, 0)
  },
  appear: function(xPos, yPos, pieceType){
  	this.xPos = xPos;
  	this.yPos = yPos;
    this.attr({x:this.gridPosToPixelsX(this.xPos),y:this.gridPosToPixelsY(-1)})
      .sprite(pieceType, 0)
      .addTween({x:this.gridPosToPixelsX(this.xPos),y:this.gridPosToPixelsY(this.yPos)}, 'easeInExpo', Game.piece.properties.dropSpeed)
  },
  disappear: function(xPos, yPos, pieceType){
  	this.xPos = xPos;
  	this.yPos = yPos;
    this.attr({x:this.gridPosToPixelsX(this.xPos),y:this.gridPosToPixelsY(this.yPos)})
      .sprite(pieceType, 1)
      .addTween({x:630,y:50}, 'easeInExpo', Game.piece.properties.disapearSpeed)
      .tween({alpha: 0.0}, Game.piece.properties.disapearSpeed*2)
  },
  movePiece: function(xPosFrom, yPosFrom, xPosTo, yPosTo){
    this.attr({x:this.gridPosToPixelsX(xPosFrom) ,y:this.gridPosToPixelsY(yPosFrom)})
      .addTween({x:this.gridPosToPixelsX(xPosTo),y:this.gridPosToPixelsY(yPosTo)}, 'easeOutExpo', Game.piece.properties.swapSpeed)
  },  
  invalidMovePiece: function(xPosFrom, yPosFrom, xPosTo, yPosTo){
    this.attr({x:this.gridPosToPixelsX(xPosTo) ,y:this.gridPosToPixelsY(yPosTo)})
      .addTween({x:this.gridPosToPixelsX(xPosFrom),y:this.gridPosToPixelsY(yPosFrom)}, 'easeInOutElastic', Game.piece.properties.swapSpeed)
  },  
  drop: function(xPos, yPos, pieceType, dropAmount){
  	this.xPos = xPos;
  	this.yPos = yPos+dropAmount;
    this.attr({x:this.gridPosToPixelsX(this.xPos),y:this.gridPosToPixelsY(this.yPos-dropAmount)})
      .addTween({x:this.gridPosToPixelsX(this.xPos),y:this.gridPosToPixelsY(this.yPos)}, 'easeInExpo', Game.piece.properties.dropSpeed)
  },
  selectPiece: function(xPos, yPos, pieceType){
  	this.xPos = xPos;
  	this.yPos = yPos;
  	if (this.selectedFlag == false) {
      this.stop(); //stop the animation
      this.animate('selected', [[pieceType,0],[pieceType,1],[pieceType,2],[pieceType,3]], 0, 0);
      this.animate('selected', 10, -1);
      this.selectedFlag=true;
    }
  },
  deselectPiece: function(xPos, yPos, pieceType){
  	this.xPos = xPos;
  	this.yPos = yPos;
    this.selectedFlag=false;
    this.stop(); //stop the animation
    this.animate('selected', [[pieceType,0]], 0, 0); //Apparenty .stop doesn't reset the sprite back to it's default position. But this workaround does....
    this.animate('selected', 10, -1);
  },

});


