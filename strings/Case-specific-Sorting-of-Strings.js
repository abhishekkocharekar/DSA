//{ Driver Code Starts
//Initial Template for javascript

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
        let string = readLine();
        
        let obj = new Solution();
        let ans = obj.caseSort(string, n);
        
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

class Solution {
    caseSort(str, n) {
        
        let small = "";
        let caps = "";
        let res = "";
        
        for(let i=0; i<n; i++){
            if(str.charCodeAt(i) < 91){
                caps = caps + str[i];
            } else if(str.charCodeAt(i) > 96){
                small = small + str[i];
            }
        }
        
        small = small.split("").sort().join("");
        caps = caps.split("").sort().join("");
        
        for(let i=0; i<n; i++){
            if(str.charCodeAt(i) < 91){
                res = res + caps[0];
                caps = caps.slice(1,caps.length,1);
            } else if(str.charCodeAt(i) > 96){
                res = res + small[0];
                small = small.slice(1,small.length,1);
            }
        }
        
        return res;
    }
}