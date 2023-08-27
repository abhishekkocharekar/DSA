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
        let str = input_line[0];
        let obj = new Solution();
        let ans = obj.findSum(str);
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
*/



class Solution 
{
    //Function to calculate sum of all numbers present in a string.
    findSum(str)
    {
        let res = 0;
        let sum = "0";
        for(let i=0; i<str.length; i++){
            if(isNaN(Number(str[i]))) {
                res = res + Number(sum);
                sum = "0"
            } else {
                sum += str[i];
            }
        }
        return res + Number(sum);
    }
}