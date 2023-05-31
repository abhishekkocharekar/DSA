//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let height = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            height[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.maxWater(height, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} height
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to return the maximum water that can be stored.
    maxWater(arr, n)
    {
        let low = 0;
        let high = n - 1;
        let max = 0;
        let gap = n - 2;
        while(low < high){
            if(Math.min(arr[low],arr[high]) * gap > max){
                max = Math.min(arr[low],arr[high]) * gap;
            } else if(arr[low] < arr[high]){
                low = low + 1;
                gap = gap - 1;
            } else {
                high = high - 1;
                gap = gap - 1;
            }
        }
        return max;
    }
}