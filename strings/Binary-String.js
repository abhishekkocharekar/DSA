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
        let input_line = readLine().split(' ');
        let a = input_line[0];
        let obj = new Solution();
        let ans = obj.binarySubstring(n, a);
        if(ans==-0)
            ans=0
        console.log(ans);
    }
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n (size of string)
 * @param {string} a (input string)
 * @returns {number}
*/
 
class Solution
{
    //Function to count the number of substrings that start and end with 1.
    binarySubstring(n, a)
    {
        let res = 0;
        let totalOnes = 0;
        for(let i=0; i<n; i++){
            if(a[i] === '1'){
                totalOnes++;
                res = res + (totalOnes - 1);
            }
        }
        return res;
    }
}