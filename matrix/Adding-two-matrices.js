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
        let n1 = parseInt(input_line[0]);
        let m1 = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let A = new Array(n1);
        for(let i=0;i<n1;i++)
        {
            let a = new Array(m1);
            for(let j=0;j<m1;j++)
            {
                a[j] =parseInt(input_line[i*m1+j]);
            }
            A[i] = a;
        }
        
        input_line = readLine().split(' ');
        let n2 = parseInt(input_line[0]);
        let m2 = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let B = new Array(n2);
        for(let i=0;i<n2;i++)
        {
            let b = new Array(m2);
            for(let j=0;j<m2;j++)
            {
                b[j] = parseInt(input_line[i*m2+j]);
            }
            B[i] = b;
        }
        
        
        let obj = new Solution();
        let ans = obj.sumMatrix(A, B);
        let s = "";
        if(ans.length==0)
            s="-1";
        else
        {
            for(let i = 0 ; i < ans.length ;i++)
            {
                for(let j=0;j < ans[i].length; j++)
                {
                    if(ans[i][j]==-0)
                        ans[i][j]=0;
                    s+=ans[i][j];
                    s+=" ";
                }
            }    
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @returns {number[][]} 
*/
class Solution 
{
    //Function to add two matrices.
    sumMatrix(A, B)
    {
        if(A.length != B.length) return [];
        if(A[0].length != B[0].length) return [];
        let res = [];
        let s = [];
        for(let i=0; i<A.length; i++){
            s = [];
            for(let j=0; j<A[i].length; j++){
                s.push(A[i][j] + B[i][j]);
            }
            res.push(s);
        }
        return res;
    } 
}