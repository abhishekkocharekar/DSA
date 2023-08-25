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
        let s1 = input_line[0];
        input_line = readLine().split(' ');
        let s2 = input_line[0];
        let obj = new Solution();
        if(obj.areRotations(s1, s2))
            console.log("1");
        else
            console.log("0");
    }
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
*/
 
class Solution 
{
    //Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2)
    {
        if(s1.length !== s2.length) return 0;
        for(let i=0; i<s1.length; i++){
            if(s1[i] === s2[0]){
                let str1 = s1.slice(i,s1.length,1);
                let str2 = s2.slice(0,str1.length,1);
                if(str1 != str2) continue;
                str1 = s1.slice(0,i,1);
                str2 = s2.slice(str2.length,s2.length,1);
                if(str1 === str2) return 1;
            }
        }
        return 0;
    }
}