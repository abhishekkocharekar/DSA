/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b});
    let res = [];
    for(let i=0; i<nums.length; i++){
        if (nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let start = i+1;
        let end = nums.length - 1;
        while(start<end){
            let threeSum = nums[i] + nums[start] + nums[end];
            if(threeSum > 0) {
                end--;
            } else if(threeSum < 0) {
                start++;
            } else {
                res.push([nums[i], nums[start], nums[end]]);
                start++;
                while(nums[start] === nums[start-1] && start<end) {
                    start++;
                }
            }
        }
    }
    return res;
};