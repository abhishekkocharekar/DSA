/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while(start<numbers.length && end>=0){
        if(start===end){
            continue;
        } else if(numbers[start] + numbers[end] === target){
            if(start<end) return [start+1,end+1];
            else return [end+1,start+1];
        } else if(numbers[start] + numbers[end] > target) end--;
        else if(numbers[start] + numbers[end] < target) start++;
    }
};