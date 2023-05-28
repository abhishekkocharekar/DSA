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
        let string = readLine();
        
        let obj = new Solution();
        let ans = obj.betBalance(string);
        
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

class Solution {
    betBalance(result) {
        let bal = 4;
        let bet = 1;
        for(let i=0;i<result.length;i++){
            if(bal < bet) return -1;
            if(result[i] === "W"){
                bal = bal + bet;
                bet = 1;
            } else {
                bal = bal - bet;
                bet = bet * 2;
            }
        }
        return bal;
    }
}