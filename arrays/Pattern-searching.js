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
        let str = readLine().trim();
        let pat = readLine().trim();
        let obj = new Solution();
        let res = obj.searchPattern(str, pat);
        if(res) console.log("Present");
        else console.log("Not present");
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @param {string} pat
 * @return {boolean}
 */
class Solution {
    searchPattern(str, pat) {
        let finding = false;
        let found = false;
        let count = 0;
        for(let i=0;i<str.length;i++){
            if(str[i]===pat[count]){
                finding = true;
                if(count === pat.length - 1) {
                    found = true;
                    break;
                }
                count = count + 1;
            } else {
                finding = false;
                i = i - count;
                count = 0;
            } 
        }
        return found;
    }
}