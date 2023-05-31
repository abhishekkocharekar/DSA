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
        let arr = new Array(n + 2);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n+2;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let ans = obj.twoRepeated(arr, n);
        console.log(ans[0] + " " + ans[1]);
        
    }
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution
{
    //Function to find two repeated elements.
    twoRepeated(arr, N)
    {
        let arr2 = [];
        let res = [];
        for(let i=0;i<N+2;i++){
            if(arr2[arr[i]] === true) res.push(arr[i]);
            else arr2[arr[i]] = true;
        }
        return res;
    }
}