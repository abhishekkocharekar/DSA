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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.maxStep(a, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} N
 * @returns {number}
*/

class Solution
{
    //Function to find maximum number of consecutive steps 
    //to gain an increase in altitude with each step.
    maxStep(arr, N)
    {
        let low = 0;
        let count = 0;
        let max = 0;
        for(let i=1;i<N;i++){
            if(arr[low] < arr[i]){
                low = i;
                count++;
            } else {
                low = i;
                count = 0;
            }
            if(count > max) {
                max = count;
            }
        }
        return max;
    }
}