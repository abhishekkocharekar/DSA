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
        if(obj.areIsomorphic(s1, s2))
            console.log("1");
        else
            console.log("0");
    }
}



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
*/
 
class Solution
{
    //Function to check if two strings are isomorphic.
    areIsomorphic(str1, str2)
    {
        if(str1.length != str2.length) return 0;
        let obj = {};
        for(let i=0; i< str1.length; i++){
            if(obj[str1[i]]){
                if(obj[str1[i]] != str2[i]) return 0;
            } else {
                obj[str1[i]] = str2[i];
            }
        }
        obj = {};
        for(let i=0; i< str1.length; i++){
            if(obj[str2[i]]){
                if(obj[str2[i]] != str1[i]) return 0;
            } else {
                obj[str2[i]] = str1[i];
            }
        }
        return 1;
    }
}