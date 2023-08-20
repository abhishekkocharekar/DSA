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
  
        input_line = readLine().split(' ');
        let A = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(n);
            for(let j=0;j<n;j++)
            {
                a[j] =parseInt(input_line[i*n+j]);
            }
            A[i] = a;
        }
        
        
        let obj = new Solution();
        let ans = obj.sumTriangles(A, n);
        let s = "";
        for(let i=0;i < ans.length; i++)
        {
            if(ans[i]==-0)
                ans[i]=0;
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} mat
 * @param {number} N
 * @returns {number[]} 
*/
class Solution 
{
    //Function to return sum of upper and lower triangles of a matrix.
    sumTriangles(mat, N)
    {
        let upper = 0;
        let lower = 0;
        let res = [];
        for(let i=0; i<N; i++){
            for(let j=0; j<N; j++){
                if(i==j){
                    upper = upper + mat[i][j];
                    lower = lower + mat[i][j];
                } else if(i < j){
                    upper = upper + mat[i][j];
                } else {
                    lower = lower + mat[i][j];
                }
            }
        }
        res.push(upper);
        res.push(lower);
        return res;
    } 
}