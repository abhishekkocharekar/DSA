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
        console.log(obj.maxIndexDiff(arr, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to find the maximum index difference.
    maxIndexDiff(A, N)
    {
        let maxArr = Array(N).fill(0);
        maxArr[N-1] = A[N-1];
        for (let i = N-2; i >= 0; i--) {
            maxArr[i] = Math.max(A[i], maxArr[i+1]);
        }
        
        let max = Number.MIN_SAFE_INTEGER;
        let i = 0, j = 0;
        while (i < N && j < N) {
            if (maxArr[j] >= A[i]) {
                max = Math.max(max, j-i);
                j++;
            } else {
                i++;
            }
        }
        return max;
    }
}