/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [l,r] = [0,height.length-1];
    let max = 0;
    while(l<r){
        let area = Math.min(height[l],height[r]) * (r-l);
        if(area > max) max = area;
        if(height[l] > height[r]) r--;
        else l++;
    }
    return max;
};