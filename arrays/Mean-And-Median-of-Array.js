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
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            A[i] = input_ar[i];
        let obj = new Solution();
        console.log(obj.mean(A,N)+" "+obj.median(A,N));
        
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
    //Function to find median of the array elements.
    median(A,N)
    {
       A.sort(function(a, b){return a - b});
       if(N%2===0)return A[N/2 - 1];
       else return A[Math.floor(N/2)];
    }
    //Function to find mean of the array elements.
    mean(A,N)
    {
        let sum = 0;
        for(let i = 0; i < N ; i++){
            sum = sum + A[i];
        }
        return Math.floor(sum/N);
    }
}