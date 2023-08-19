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
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let matrix = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(m);
            for(let j=0;j<m;j++)
            {
                a[j] =parseInt(input_line[i*m+j]);
            }
            matrix[i] = a;
        }
        
        input_line = readLine().split(' ');
        let x = parseInt(input_line[0]);
        
        let obj = new Solution();
        let ans = obj.search(matrix, n, m, x);
        if(ans)
            ans=1;
        else
            ans=0;
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} matrix
 * @param {number} n
 * @param {number} m
 * @param {number} x
 * @returns {boolean}
*/
class Solution
{
    //Function to search a given number in row-column sorted matrix.
    search(matrix, n, m, x)
    {
        let i = 0; 
        let j = m - 1;
        while(i<n && j>=0){
            if(x === matrix[i][j]) return 1;
            if(x > matrix[i][j]){
                i++;
            } else if(x < matrix[i][j]){
                j--;
            }
        }
        return 0;
    }
}