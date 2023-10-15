/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor((l+r)/2);
    while(l <= r){
        if(nums[m] > target) {
            r = m-1;
            m = Math.floor((l+r)/2);
        }
        else if(nums[m] < target) {
            l = m+1;
            m = Math.floor((l+r)/2);
        }
        else return m;
    }
    return -1;
};