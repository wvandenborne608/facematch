Crafty.c('Match3', {
  init: function() {
    //this.requires('');
  },
  pixelsToPosX: function(x) {
    return Math.round(((x-Game.grid.position.x) / Game.piece.properties.width));
  },
  pixelsToPosY: function(y) {
    return Math.round(((y-Game.grid.position.y) / Game.piece.properties.height));
  },

  formatMatch: function(type, x1, y1, x2, y2) {
    return {
      type : type,
      fromX : x1,
      fromY : y1,
      toX : x2,
      toY : y2
    };
  },

  getPossibleMatches: function(justBool) {
    var coords = [];
    for (var y = 0; y < Game.grid.dimensions.y; y++) {
      for (var x = 0; x < Game.grid.dimensions.x; x++) {
        var piece = Game.grid.gridArray[y][x];
        if (x < (Game.grid.dimensions.x - 2)) { // Check to the right
          if (x < (Game.grid.dimensions.x - 3)) { // Right straight
            if ((Game.grid.gridArray[y][x+1] == piece) && (Game.grid.gridArray[y][x+3] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x+3, y, x+2, y));
              }
            }
            if ((Game.grid.gridArray[y][x+2] == piece) && (Game.grid.gridArray[y][x+3] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x, y, x+1, y));
              }
            }
          }
          if (y > 0) { // Right up
            if ((Game.grid.gridArray[y-1][x+1] == piece) && (Game.grid.gridArray[y-1][x+2] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x, y, x, y-1));
              }
            }
            if ((Game.grid.gridArray[y-1][x+1] == piece) && (Game.grid.gridArray[y][x+2] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x+1, y-1, x+1, y));
              }
            }
            if ((Game.grid.gridArray[y][x+1] == piece) && (Game.grid.gridArray[y-1][x+2] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x+2, y-1, x+2, y));
              }
            }
          }
          if (y < (Game.grid.dimensions.y - 1)) { // Right down
            if ((Game.grid.gridArray[y+1][x+1] == piece) && (Game.grid.gridArray[y+1][x+2] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x, y, x, y+1));
              }
            }
            if ((Game.grid.gridArray[y+1][x+1] == piece) && (Game.grid.gridArray[y][x+2] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x+1, y+1, x+1, y));
              }
            }
            if ((Game.grid.gridArray[y][x+1] == piece) && (Game.grid.gridArray[y+1][x+2] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x+2, y+1, x+2, y));
              }
            }
          }

        }
        if (y < (Game.grid.dimensions.y - 2)) {// Check down
          if (y < (Game.grid.dimensions.y - 3)) {// Down straight
            if ((Game.grid.gridArray[y+1][x] == piece) && (Game.grid.gridArray[y+3][x] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x, y+3, x, y+2));
              }
            }
            if ((Game.grid.gridArray[y+2][x] == piece) && (Game.grid.gridArray[y+3][x] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x, y, x, y+1));
              }
            }
          }
          if (x > 0) { // Down left
            if ((Game.grid.gridArray[y+1][x-1] == piece) && (Game.grid.gridArray[y+2][x-1] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x, y, x-1, y));
              }
            }
            if ((Game.grid.gridArray[y+1][x-1] == piece) && (Game.grid.gridArray[y+2][x] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x-1, y+1, x, y+1));
              }
            }
            if ((Game.grid.gridArray[y+1][x] == piece) && (Game.grid.gridArray[y+2][x-1] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x-1, y+2, x, y+2));
              }
            }
          }
          if (x < (Game.grid.dimensions.x - 1)) { // Down right
            if ((Game.grid.gridArray[y+1][x+1] == piece) && (Game.grid.gridArray[y+2][x+1] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x, y, x+1, y));
              }
            }
            if ((Game.grid.gridArray[y+1][x+1] == piece) && (Game.grid.gridArray[y+2][x] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x+1, y+1, x, y+1));
              }
            }
            if ((Game.grid.gridArray[y+1][x] == piece) && (Game.grid.gridArray[y+2][x+1] == piece)) {
              if (justBool) {
                return true;
              } else {
                coords.push(this.formatMatch(piece, x+1, y+2, x, y+2));
              }
            }
          }
        }
      } // for x
    } // for y
    return (justBool ? false : coords);
  },

  hasPossibleMatches: function() {
    return this.getPossibleMatches(true);
  },

  getMatches: function(justBool) {
    var matches = [];
    for (var y = 0; y < Game.grid.dimensions.y; y++) {
      for (var x = 0; x < (Game.grid.dimensions.x - 2); x++) {
        var type = Game.grid.gridArray[y][x];
        var match = [];
        for (var i = x; i < Game.grid.dimensions.x; i++) {
          if (Game.grid.gridArray[y][i] === type) {
            match.push({
              type : type,
              x : i,
              y : y
            });
          } else {
            break;
          }
        }
        if (match.length >= 3) {
          x = (i - 1);
          matches.push(match);
        }

      }
    }
    for (var x = 0; x < Game.grid.dimensions.x; x++) {
      for (var y = 0; y < (Game.grid.dimensions.y - 2); y++) {
        var type = Game.grid.gridArray[y][x];
        var match = [];
        for (var i = y; i < Game.grid.dimensions.y; i++) {
          if (Game.grid.gridArray[i][x] === type) {
            match.push({
              type : type,
              x : x,
              y : i
            });
          } else {
            break;
          }
        }
        if (match.length >= 3) {
          y = (i - 1);
          matches.push(match);
        }
      }
    }
    return (justBool ? !!matches.length : matches);
  },

  hasMatches: function() {
    return this.getMatches(true);
  },

  createEmptyGrid: function() {
    for (y=0; y<Game.grid.dimensions.y; y++) {
      Game.grid.gridArray[y]= new Array(Game.grid.dimensions.y);
      for (x=0; x<Game.grid.dimensions.x; x++) {
        Game.grid.gridArray[y][x] = true;
      }
    }
  },

  fillGrid : function() {
    var attempts = 0;
    do {
      for (y=0; y<Game.grid.dimensions.y; y++) {
        Game.grid.gridArray[y]= new Array(Game.grid.dimensions.y);
        for (x=0; x<Game.grid.dimensions.x; x++) {
          Game.grid.gridArray[y][x] = Math.floor((Math.random() * Game.piece.properties.totalTypes));
        }
      }
      attempts++;
      if (attempts>500) break;
    } while (this.hasMatches() || !this.hasPossibleMatches());
  },

  isAdjacent: function(x1, y1, x2, y2) {
    return ( 
         ( (x1 == x2) && ( (y1 == y2-1) || (y1 == y2+1) ) ) // Up or down.
      || ( (y1 == y2) && ( (x1 == x2-1) || (x1 == x2+1) ) ) // Left or right.
    );
  },

  isMatch: function(selectedPieceX, selectedPieceY, pieceX, pieceY) {
    var possibleMatches = this.getPossibleMatches();
    var possibleMatchesArrayLength = possibleMatches.length;
    for (var i = 0; i < possibleMatchesArrayLength; i++) {
      if (((possibleMatches[i].fromX == selectedPieceX) 
      && (possibleMatches[i].fromY == selectedPieceY))
      && ((possibleMatches[i].toX == pieceX)
      && (possibleMatches[i].toY == pieceY))) {
        return true;
      }
    }
    return false;
  },

  swapGridPieces: function(x1, y1, x2, y2) {
    var tmp1 = Game.grid.gridArray[y1][x1];
    var tmp2 = Game.grid.gridArray[y2][x2];
    Game.grid.gridArray[y1][x1] = tmp2;
    Game.grid.gridArray[y2][x2] = tmp1;
  },

  getNewPiecesForEmptySpots: function() {
    var attempts = 0;
    var newPieces = new Array();
    do {
      for (var y = 0; y < Game.grid.dimensions.y; y++) {
        for (var x = 0; x < Game.grid.dimensions.x; x++) {
          if (Game.grid.gridArray[y][x] === true)  {
            Game.grid.gridArray[y][x] = Math.floor((Math.random() * Game.piece.properties.totalTypes));
            newPieces.push({x:x, y:y, type: Game.grid.gridArray[y][x]});
          }
        }
      }
      attempts++;
      if (attempts>500) break;
    } while (this.hasMatches() || !this.hasPossibleMatches());
    return newPieces;
  },

 dropPieces: function() {
    var holes;
    var stack = [];
    var toDrop = [];
    for (var x = 0; x < Game.grid.dimensions.x; x++) {
      holes = 0;
      stack[x] = 0;
      for (var y = (Game.grid.dimensions.y - 1); y >= 0; y--) {
        if (Game.grid.gridArray[y][x] === true) {
          holes++;
          stack[x]++;
        } else if (holes) {
          toDrop.push({x:x, y:y, holes:holes, type: Game.grid.gridArray[y][x], gamePiece: Game.piece.piecesArray[y][x] })
        }
      }
    }
    for (var i = 0; i < toDrop.length; i++) {
      Game.grid.gridArray[toDrop[i].y][toDrop[i].x]=true;
      Game.grid.gridArray[toDrop[i].y + toDrop[i].holes ][toDrop[i].x]=toDrop[i].type;
      Game.piece.piecesArray[toDrop[i].y+ toDrop[i].holes][toDrop[i].x ] = toDrop[i].gamePiece;
      Game.piece.piecesArray[toDrop[i].y][toDrop[i].x].drop(toDrop[i].x, toDrop[i].y, Game.grid.gridArray[toDrop[i].y][toDrop[i].x], toDrop[i].holes);
    }
    newPieces = this.getNewPiecesForEmptySpots();
    for (var i = 0; i < newPieces.length; i++) {
      var x = newPieces[i].x;
      var y = newPieces[i].y;
      Game.piece.piecesArray[y][x] = Crafty.e("Piece");
      Game.piece.piecesArray[y][x].appear(x , y, Game.grid.gridArray[y][x]);
      that = this;
      Game.piece.piecesArray[y][x].bind('MouseDown', function() {
        Game.states.dragPreviousPosition.x = that.pixelsToPosX(this.x);
      	Game.states.dragPreviousPosition.y = that.pixelsToPosY(this.y);
      });
      Game.piece.piecesArray[y][x].bind('MouseUp', function() {
        if (that.isAdjacent( that.pixelsToPosX(this.x), that.pixelsToPosY(this.y), Game.states.dragPreviousPosition.x, Game.states.dragPreviousPosition.y )  ) {
          that.clickPiece( that.pixelsToPosX(this.x), that.pixelsToPosY(this.y) );
          that.clickPiece( Game.states.dragPreviousPosition.x, Game.states.dragPreviousPosition.y );
        } else {
          that.clickPiece( that.pixelsToPosX(this.x), that.pixelsToPosY(this.y) );
        }
        Game.states.dragPreviousPosition.x = -1
        Game.states.dragPreviousPosition.y = -1
      });
    }
  }, 

  execMatches: function() {
    var matches = this.getMatches();
    var toMove = new Array();
    for (var i = 0; i < matches.length; i++) {
      for (var j = 0; j < matches[i].length; j++) {
        var gridX = matches[i][j].x;
        var gridY = matches[i][j].y;
        var tmpPiece = Game.piece.piecesArray[gridY][gridX]
        var tmpPieceType = Game.grid.gridArray[gridY][gridX]
        tmpPiece.disappear(gridX, gridY, Game.grid.gridArray[gridY][gridX]);
        tmpPiece.unbind("MouseUp");
        tmpPiece.unbind("MouseDown");
        Game.grid.gridArray[gridY][gridX]=true; //empty this grid position
        Crafty.e("Delay").delay(function() {
          tmpPiece = null;
        }, 70);
      }

      var score = (Game.piece.properties.totalTypes - tmpPieceType)
      score = 12 * score * (Game.states.dropping + 1)  * 24;
      Game.score.totalScore = Game.score.totalScore + score ;
      Crafty.e("Delay").delay(function() {
        Game.score.totalScoreTextElement.render(Game.score.totalScore);
      }, 1000);

    }
    this.dropPieces();

    if (this.hasMatches()) {
      Game.states.dropping++;
      that = this;
      Crafty.e("Delay").delay(function() {
        that.execMatches();
      }, 500);
    } else {
      Game.states.dropping = 0;
  }

  },
  clickPiece: function(gridX, gridY) {
  	Game.states.dragging = false;
    if (((Game.piece.selectedPiece.x>=0) && (Game.piece.selectedPiece.x<Game.grid.dimensions.x)) 
    &&  ((Game.piece.selectedPiece.y>=0) && (Game.piece.selectedPiece.y<Game.grid.dimensions.x))) {
      previousSelectedPieceX = Game.piece.selectedPiece.x;
      previousSelectedPieceY = Game.piece.selectedPiece.y;
      Game.piece.piecesArray[ previousSelectedPieceY ][ previousSelectedPieceX ].deselectPiece(previousSelectedPieceX, previousSelectedPieceY, Game.grid.gridArray[ previousSelectedPieceY ][ previousSelectedPieceX ]);
    }

    if ((Game.piece.selectedPiece.x==gridX)
    && (Game.piece.selectedPiece.y==gridY)) {
      Game.piece.selectedPiece.x = -1
      Game.piece.selectedPiece.y = -1
      Game.piece.piecesArray[ gridY ][ gridX ].deselectPiece(gridX, gridY, Game.grid.gridArray[ gridY ][ gridX ]);
    } else {

      //if is adjacent, then select the selected piece.
      if (!this.isAdjacent(Game.piece.selectedPiece.x, Game.piece.selectedPiece.y, gridX, gridY)) { 
      	Game.states.dragging = true;
        Game.piece.selectedPiece.x = gridX;
        Game.piece.selectedPiece.y = gridY;
        Game.piece.piecesArray[gridY][gridX].selectPiece(gridX, gridY, Game.grid.gridArray[ gridY ][ gridX ]);
        return;
      } 

      if ((this.isMatch(Game.piece.selectedPiece.x, Game.piece.selectedPiece.y, gridX, gridY)) 
      ||  (this.isMatch(gridX, gridY, Game.piece.selectedPiece.x, Game.piece.selectedPiece.y)))  {
        //swap the grid values
        this.swapGridPieces(gridX, gridY, Game.piece.selectedPiece.x, Game.piece.selectedPiece.y);

        //visually swap the pieces
        Game.piece.piecesArray[gridY][gridX].movePiece(gridX, gridY, Game.piece.selectedPiece.x, Game.piece.selectedPiece.y);
        Game.piece.piecesArray[Game.piece.selectedPiece.y][Game.piece.selectedPiece.x].movePiece(Game.piece.selectedPiece.x, Game.piece.selectedPiece.y, gridX, gridY);

        //Swap pieces objects in array
        tmpPiece = Game.piece.piecesArray[gridY][gridX];
        Game.piece.piecesArray[gridY][gridX] = Game.piece.piecesArray[Game.piece.selectedPiece.y][Game.piece.selectedPiece.x]
        Game.piece.piecesArray[Game.piece.selectedPiece.y][Game.piece.selectedPiece.x] = tmpPiece
    
        //reset the selected piece
        Game.piece.selectedPiece.x = -1
        Game.piece.selectedPiece.y = -1
        
        var that = this;
        Crafty.e("Delay").delay(function() {
          that.execMatches();
        }, 100);

      } else {
        Game.piece.piecesArray[gridY][gridX].invalidMovePiece(gridX, gridY, Game.piece.selectedPiece.x, Game.piece.selectedPiece.y);
        Game.piece.piecesArray[Game.piece.selectedPiece.y][Game.piece.selectedPiece.x].invalidMovePiece(Game.piece.selectedPiece.x, Game.piece.selectedPiece.y, gridX, gridY);
        Game.piece.selectedPiece.x = -1
        Game.piece.selectedPiece.y = -1
      }

    }  
  },

  appearPieces: function() {
    for (y=0; y<Game.grid.dimensions.y; y++) {
      Game.piece.piecesArray[y]= new Array(Game.grid.dimensions.y);
      for (x=0; x<Game.grid.dimensions.x; x++) {
        Game.piece.piecesArray[y][x] = Crafty.e("Piece");
        Game.piece.piecesArray[y][x].appear(x , y, Game.grid.gridArray[y][x]);
        that = this;
        Game.piece.piecesArray[y][x].bind('MouseDown', function() {
      	  Game.states.dragPreviousPosition.x = that.pixelsToPosX(this.x);
      	  Game.states.dragPreviousPosition.y = that.pixelsToPosY(this.y);
        });
        Game.piece.piecesArray[y][x].bind('MouseUp', function() {
           if (that.isAdjacent( that.pixelsToPosX(this.x), that.pixelsToPosY(this.y), Game.states.dragPreviousPosition.x, Game.states.dragPreviousPosition.y )  ) {
             that.clickPiece( that.pixelsToPosX(this.x), that.pixelsToPosY(this.y) );
             that.clickPiece( Game.states.dragPreviousPosition.x, Game.states.dragPreviousPosition.y );
           } else {
             that.clickPiece( that.pixelsToPosX(this.x), that.pixelsToPosY(this.y) );
           }
      	   Game.states.dragPreviousPosition.x = -1
       	   Game.states.dragPreviousPosition.y = -1
        });
      }
    }
  },

  dump: function() {
    var tmp = "match3.setPieces([\n";
    for (var y = 0; y < Game.grid.dimensions.y; y++) {
      tmp += "[";
      for (var x = 0; x < Game.grid.dimensions.x; x++) {
        if (Game.grid.gridArray[y][x] === true) {
          tmp += '.,';
        } else {
          tmp += Game.grid.gridArray[y][x] + ',';
        }
      }
      tmp = tmp.substr(0, tmp.length - 1) + "],\n";
    }
    tmp += "]);";
    console.log('[Board Dump]');
    console.log(tmp);;
  },
  
});


