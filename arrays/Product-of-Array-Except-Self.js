/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [nums[0]];
    let postfix = [nums[nums.length-1]];
    let i = 1;
    let j = nums.length - 2;
    while(i<nums.length && j>=0){
        prefix.push(nums[i] * prefix[i-1]);
        postfix.unshift(nums[j] * postfix[0]);
        i++;
        j--;
    }
    console.log(prefix, postfix);
    let carry = 1;
    let output = [];
    for(let i=0; i<nums.length; i++){
        if(i===nums.length-1) {
            output[i] = carry;
            return output;
        }
        output[i]= carry * postfix[i+1];
        carry = prefix[i];
    }
};