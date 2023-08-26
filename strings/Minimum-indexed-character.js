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
        let input_line = readLine().split();
        let str = input_line[0];
        input_line = readLine().split();
        let patt = input_line[0];
        let obj = new Solution();
        let ans = obj.minIndexChar(str, patt);
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @param {string} patt
 * @returns {number}
*/
class Solution {
    minIndexChar(str, patt){
        let obj = {};
        for(let i=0; i<str.length; i++){
            if(obj[str[i]] === undefined) obj[str[i]] = i;
        }
        let res = Number.MAX_VALUE;
        for(let i=0; i<patt.length; i++){
            if(obj[patt[i]] < res) res = obj[patt[i]];
        }
        return res === Number.MAX_VALUE ? -1 : res;
    }
}