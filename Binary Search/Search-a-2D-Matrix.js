/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let col = matrix[0].length - 1;
    for(let i=0; i<matrix.length; i++){
        if(target===matrix[i][col]) return true;
        else if(target < matrix[i][col]){
            let l = 0;
            let r = col-1;
            let m = Math.floor((l+r)/2);
            while(l<=r){
                if(target === matrix[i][m]) return true;
                else if(target < matrix[i][m]) {
                    r = m - 1;
                    m = Math.floor((l+r)/2);
                }
                else{
                    l = m + 1;
                    m = Math.floor((l+r)/2);
                }
            }
        }
    }
    return false;
};