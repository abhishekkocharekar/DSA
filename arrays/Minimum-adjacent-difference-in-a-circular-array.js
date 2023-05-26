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
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar[i];
        let obj = new Solution();
        console.log(obj.minAdjDiff(arr, n));
        
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
    //Function to find minimum adjacent difference in a circular array.
    minAdjDiff(arr, n)
    {
        let first = arr[0];
        let min = null;
        for(let i=0;i<n-1;i++){
            arr[i] = arr[i] - arr[i+1];
            if(arr[i]<0) arr[i] = arr[i] * -1;
            if(min===null) min = arr[i];
            else if(min>arr[i]) min = arr[i];
        }
        arr[n-1] = arr[n-1] - first;
        if(arr[n-1]<0) arr[n-1] = arr[n-1] * -1;
        if(min>arr[n-1]) min = arr[n-1];
        return min
    }
}