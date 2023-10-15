/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor((l+r)/2);
    let res = Number.MAX_SAFE_INTEGER;
    while(l <= r){
        if(nums[l] < nums[r]){
            res = Math.min(res,nums[l]);
            break;
        }
        if(nums[m] < res) res = nums[m];
        if(nums[m] >= nums[l]) {
            l = m + 1;
            m = Math.floor((l+r)/2);
        } else {
            r = m - 1;
            m = Math.floor((l+r)/2);
        }
    }
    return res;
};