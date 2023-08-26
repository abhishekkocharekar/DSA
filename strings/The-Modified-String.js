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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split();
        let a = input_line[0];
        let obj = new Solution();
        let ans = obj.modified(a);
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} a
 * @returns {number}
*/
class Solution 
{
    modified(a)
    {
        let ans, same;
        ans=0;
        same=1;
        
        for(let i=1;a[i];i++)
        {
            if(a[i]==a[i-1]){
                same++;
            }
            else{
                ans+=Math.floor((same-1)/2);
                same=1;
            }
        }
        ans += Math.floor((same-1)/2);
        return ans;
    }
}