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
        let a = input_line[0];
        let b = input_line[1];
        let obj = new Solution();
        if(obj.isAnagram(a, b))
            console.log("YES");
        else
            console.log("NO");
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/
 
class Solution 
{
    //Function is to check whether two strings are anagram of each other or not.
    isAnagram(a, b)
    {
        if(a.length != b.length) return false;
        
        const obj1 = {};
        const obj2 = {};
        
        for(let i=0; i<a.length; i++){
            if(obj1[a[i]]) obj1[a[i]]++;
            else obj1[a[i]] = 1;
            if(obj2[b[i]]) obj2[b[i]]++;
            else obj2[b[i]] = 1;
        }
        
        for( const k in obj1){
            if(obj1[k] != obj2[k]) return false;
        }
        
        return true;
    }
}