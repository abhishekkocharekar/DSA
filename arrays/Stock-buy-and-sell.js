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
        let A = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            A[i] = input_ar1[i];
        let p = 0;
        for(let i=0; i<N-1; i++)
        {
            if(A[i+1]>A[i])
                p += A[i+1]-A[i];
        }
        let obj = new Solution();
        let res = obj.stockBuySell(A, N);
        if(res.length == 0){
            console.log("No Profit");
        }
        else{
            let c=0;
            for (let i=0; i<res.length; i++){
                c += A[res[i][1]] - A[res[i][0]];
            }
            if(c==p)
                console.log(1);
            else
                console.log(0);
        }
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} n
 * @returns {number[][]}
*/

class Solution {
    //Function to find the days of buying and selling stock for max profit.
    stockBuySell(A, n)
    {
        let buy = null;
        let arr = [];
        let i;
        for(i=0;i<n;i++){
            if(buy === null && A[i]<A[i+1]){
                buy = i;
            } else if(buy !== null && A[i]>A[i+1]){
                arr.push([buy,i]);    
                buy = null;
            }
        }
        if(buy != null){
            arr.push([buy,i-1]);  
        }
        return arr;
    }
}