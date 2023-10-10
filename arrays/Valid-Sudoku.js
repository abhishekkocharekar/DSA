/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let r = Array(9).fill({});
    let c = Array(9).fill({});
    let s = Array(9).fill({});

    for(let i=0; i<board.length; i++){
      for(let j=0; j<board.length; j++){
        if(board[i][j] != '.'){
          if(c[i][board[i][j]]) return false;
          c[i] = {...c[i], [board[i][j]]: true};
          if(r[j][board[i][j]]) return false;
          r[j] = {...r[j], [board[i][j]]: true};
          if(i<3){
            if(j<3){
              if(s[0][board[i][j]]) return false;
              s[0] = {...s[0], [board[i][j]]: true}
            } else if(j<6){
              if(s[1][board[i][j]]) return false;
              s[1] = {...s[1], [board[i][j]]: true}
            } else {
              if(s[2][board[i][j]]) return false;
              s[2] = {...s[2], [board[i][j]]: true}
            }
          } else if(i<6){
            if(j<3){
              if(s[3][board[i][j]]) return false;
              s[3] = {...s[3], [board[i][j]]: true}
            } else if(j<6){
              if(s[4][board[i][j]]) return false;
              s[4] = {...s[4], [board[i][j]]: true}
            } else {
              if(s[5][board[i][j]]) return false;
              s[5] = {...s[5], [board[i][j]]: true}
            }
          } else {
            if(j<3){
              if(s[6][board[i][j]]) return false;
              s[6] = {...s[6], [board[i][j]]: true}
            } else if(j<6){
              if(s[7][board[i][j]]) return false;
              s[7] = {...s[7], [board[i][j]]: true}
            } else {
              if(s[8][board[i][j]]) return false;
              s[8] = {...s[8], [board[i][j]]: true}
            }
          }
        }
      }
    }
    return true;
};
