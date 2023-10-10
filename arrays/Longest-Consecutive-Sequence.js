/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    let obj = {};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]) {
            nums.splice(i,1);
            i--;
            continue;
        } else {
            obj[nums[i]] = 1;
        }
    };
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]-1]){
            obj[nums[i]]++;
        } 
        if(obj[nums[i]+1]){
            obj[nums[i]]++;
        }
    };
    let max = 0;
    let ans = 2;
    for(k in obj){
        if(obj[k] > max) max = obj[k];
        if(obj[k] === 3) ans++;
    }
    if(max < 3) return max;
    return ans;
};