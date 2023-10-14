/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let stack = [];
    let res = Array(temps.length).fill(0);
    for(let i=0; i<temps.length; i++){
        if(stack.length === 0) stack.push({val: temps[i], i: i});
        else if(stack[stack.length-1].val < temps[i]){
            while(stack[stack.length-1]?.val < temps[i]){
                res[stack[stack.length-1].i] = i - stack[stack.length-1].i;
                stack.pop();
            }
            stack.push({val: temps[i], i: i});
        } else {
            stack.push({val: temps[i], i: i});
        }
    }
    return res;
};