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
        let N = parseInt(readLine());
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let X = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.leftIndex(N, arr, X));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @param {number[]} arr
 * @param {number} X
 * @returns {number}
*/

class Solution {
    
    leftIndex(N, arr, n)
    {
        let low = 0;
        let high = N - 1;
        let mid = Math.floor((low + high)/2);
        while (low <= high) {
            if (arr[mid] == n) {
                if(arr[mid - 1] < n || mid == 0){
                    return mid;
                } else {
                    high = mid - 1;
                }
            }
            else if(arr[mid] > n) {
                high = mid - 1;
            } else if(arr[mid] < n){
                low = mid + 1;
            }
            mid = Math.floor((low+high)/2);
        }
        return -1;
    }
}