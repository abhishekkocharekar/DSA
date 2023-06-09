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
        let k = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.countOccurence(arr, n, k));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution
{
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k)
    {
        let obj = {};
        let res = 0;
        for(let i=0;i<n;i++){
            if(obj[arr[i]]) obj[arr[i]]++;
            else obj[arr[i]] = 1;
        }
        for(let i in obj){
            if(obj[i] > n/k) res++;
        }
        return res;
    }
}