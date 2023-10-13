/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxL = [height[0]];
    let maxR = [];
    maxR[height.length-1] = height[height.length-1];
    for(let i=1; i<height.length; i++){
        maxL[i] = Math.max(maxL[i-1],height[i-1]);
    }
    for(let i=height.length-2; i>=0; i--){
        maxR[i] = Math.max(maxR[i+1],height[i+1]);
    }
    let min = [];
    for(let i=0; i<height.length; i++){
        min[i] = Math.min(maxL[i],maxR[i]);
    }
    let res = 0;
    for(let i=0; i<height.length; i++){
        if(min[i] - height[i] > 0) res = res + min[i] - height[i];
    }
    return res;
};