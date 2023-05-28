//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) arr[i] = input_ar[i];
        input_ar = readLine().split(' ').map(x => parseInt(x));
        let x = input_ar[0];
        let y = input_ar[1];
        let obj = new Solution();
        console.log(obj.majorityWins(arr, n, x, y));
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @returns {number}
*/
class Solution {
    // Function to find element with more appearances between two elements in an
    // array.
    majorityWins(arr, n, x, y) {
        let xFreq = 0;
        let yFreq = 0;
        for(let i=0;i<n;i++){
            if(arr[i] === x) xFreq++;
            else if(arr[i] === y) yFreq++;
        }
        if(xFreq === yFreq){
            if(x>y) return y;
            else return x;
        } 
        else if(xFreq > yFreq) return x;
        else return y;
    }
}