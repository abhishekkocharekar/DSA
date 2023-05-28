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
        let a = new Array(n);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar[i];
        let obj = new Solution();
        console.log(obj.equilibriumPoint(a, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        for(let i=1;i<n;i++){
            a[i] = a[i-1] + a[i];
        }
        let left;
        let right;
        for(let i=0;i<n;i++){
            if(i === n-1) right = 0;
            else right = a[n-1] - a[i];
            if(i === 0) left = 0;
            else left = a[i-1];
            if(left === right) return i+1;
        }
        return -1;
    }
}