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
    for (; i < t; i++) {
        let n = BigInt(readLine());
        let obj = new Solution();
        let res = obj.matchGame(n);
        console.log(res.toString());
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {BigInt} n
 * @return {number}
 */
class Solution {
    matchGame(n) {
        if(n % BigInt(5) === 0n) return -1;
        let i = 1;
        while(i<=4){
            if((n - BigInt(i)) % BigInt(5) === 0n) {
                return i;
            }
            i++;
        }
    }
}