/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let [l,r] = [0,nums.length-1];
    let m;
    while(l<=r){
        m = Math.floor((l+r)/2);
        if(nums[m] === target) return m
        if(nums[m] >= nums[l]){
            if(nums[l] > target || target > nums[m]){
                l = m + 1;
            }
            else {
                r = m - 1;
            }
        } else {
            if(nums[m] > target || target > nums[r]){
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }
    return -1;
};



