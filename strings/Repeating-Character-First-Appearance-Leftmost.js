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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.repeatedCharacter(s);
        if(ans==-1)
        console.log(ans);
        else
        console.log(s[ans]);
    }
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
*/


class Solution
{
    //Function to find repeated character whose first appearance is leftmost.
    repeatedCharacter(s)
    {
        let obj = {};
        for(let i=0; i<s.length; i++){
            if(obj[s[i]]) obj[s[i]][0]++;
            else obj[s[i]] = [1,i];
        }
        
        for(const c in obj){
            if(obj[c][0] > 1) {
                return obj[c][1];
            }
        }
        
        return -1;
    }
}