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
        let str1 = input_line[0];
        input_line = readLine().split(' ');
        let str2 = input_line[0];
        let obj = new Solution();
        if(obj.isRotated(str1, str2))
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
    //Function to check if a string can be obtained by rotating
    //another string by exactly 2 places.
    // amazon
    // onamaz
    isRotated(str1, str2)
    {
        if(str1.length != str2.length) return false;
        let a = str1.slice(2, str1.length, 1) + str1.slice(0, 2, 1);
        if(a === str2) return true;
        a = str2.slice(2, str2.length, 1) + str2.slice(0, 2, 1);
        if(a === str1) return true;
        else return false;
    }
}