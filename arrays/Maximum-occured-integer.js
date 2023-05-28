//{ Driver Code Starts
//Initial Template for javascript

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
        let L = new Array(n);
        let R = new Array(n);
        let maxx = 0;
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            L[i] = input_ar0[i];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            R[i] = input_ar1[i];
            if(R[i] > maxx){
	            maxx = R[i];
	        }
        }
        let obj = new Solution();
        console.log(obj.maxOccured(L, R, n, maxx));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} L
 * @param {number[]} R
 * @param {number} n
 * @param {number} maxx
 * @returns {number}
*/

class Solution {
    //Function to find the maximum occurred integer in all ranges.
    maxOccured(L, R, n, maxx)
    {
        let arr = [];
        for(let i=0;i<n;i++){
            if(arr[L[i]] === undefined) arr[L[i]] = 0;
            if(arr[R[i]+1] === undefined) arr[R[i]+1] = 0;
            arr[L[i]] = arr[L[i]] + 1;
            arr[R[i]+1] = arr[R[i]+1] - 1;
        }
        if(arr[0] === undefined) arr[0] = 0;
        let max = 0;
        for(let i=1;i<maxx;i++){
            if(arr[i] === undefined) arr[i] = 0;
            arr[i] = arr[i] + arr[i-1];
            if(arr[max]<arr[i]) max = i;
        }
        return max;
    }
}