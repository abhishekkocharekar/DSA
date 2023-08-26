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
        let ans = obj.getMaxOccuringChar(s);
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} str
 * @returns {string}
*/
class Solution 
{
    //Function to find the maximum occurring character in a string.
    getMaxOccuringChar(str)
    {
        let obj = {};
        let max = 0;
        let res = null;
        for( const l of str ) {
            if(obj[l]) obj[l]++;
            else obj[l] = 1;
        }
        for( const i in obj ){
            if(obj[i] > max){
                max = obj[i];
                res = i;
            }
            if(obj[i] === max){
                if(i.charCodeAt(0) < res.charCodeAt(0)){
                    max = obj[i];
                    res = i;    
                }
            }
        }
        return res;
    }
}