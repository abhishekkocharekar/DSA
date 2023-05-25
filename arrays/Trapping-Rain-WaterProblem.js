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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.trappingWater(arr, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n)
    {
        let lmax = [],rmax = [];
        lmax[0] = arr[0];
        let water = 0;
        for(let i=1;i<n;i++){
            lmax[i] = Math.max(lmax[i-1],arr[i]);
        }
        rmax[n-1] = arr[n-1];
        for(let i=n-2;i>=0;i--){
            rmax[i] = Math.max(rmax[i+1],arr[i]);
        }
        for(let i=0;i<n;i++){
            water = water + Math.min(lmax[i],rmax[i]) - arr[i];
        }
        return water;
    }
}