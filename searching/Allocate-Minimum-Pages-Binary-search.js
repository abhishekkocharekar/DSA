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
        let m = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.findPages(a, n, m));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution
{
    //Function to find minimum number of pages.
    findPages(arr, n, m)
    {
        if(m > n) return -1;
        let max = 0;
        let sum = arr[0]
        for(let i=1;i<n;i++){
            sum = sum + arr[i];
            if(max < arr[i]) max = arr[i];
        }
        let low = max;
        let high = sum;
        let res = -1;
        let x;
        while(low <= high){
            x = Math.floor((low+high)/2);
            // console.log(low,x,high)
            let count = 1;
            let sum2 = 0;
            for(let i=0;i<n;i++){
                sum2 = sum2 + arr[i];
                if(sum2 > x){
                    sum2 = 0;
                    count = count + 1;
                    i = i - 1;
                }
                // if(count > m) break;
            }
            if(count > m){
                low = x + 1;
            } else {
                high = x - 1;
                // if(res > x){
                    res = x;
                // }
            } 
            // console.log("after",low,x,high)
        }
        return res;
    }
}