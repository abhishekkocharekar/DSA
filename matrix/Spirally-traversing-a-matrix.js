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
        
        let obj = new Solution();
        let ans = obj.spirallyTraverse(matrix, n, m);
        let s = "";
        for(let i = 0 ; i < ans.length ;i++)
        {
            s+=ans[i];
            s+=" ";   
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[][]} matrix
 * @param {number} r
 * @param {number} c
 * @returns {number[]}
*/
class Solution 
{
    boundaryTraversal(matrix, res, top, right, bottom, left)
    {
        if(top==bottom && right==left){
            res.push(matrix[top][right]); 
            return res;
        }
        if(top == bottom){
            for(let i=left;i<=right;i++){
                res.push(matrix[top][i]);
            } 
            return res;
        }
        if(right==left){
            for(let i=top;i<=bottom;i++){
                res.push(matrix[i][right]);
            }    
            return res;
        }
        for(let i=top;i<=right;i++){
            res.push(matrix[top][i]);
        }
        for(let i=top+1;i<=bottom;i++){
            res.push(matrix[i][right]);
        }
        for(let i=right-1;i>=left;i--){
            res.push(matrix[bottom][i]);
        }
        for(let i=bottom-1;i>top;i--){
            res.push(matrix[i][left]);
        }
        return res;
    }
    //Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix, r, c)
    {
        let res = [];
        let top = 0;
        let right = c - 1;
        let bottom = r - 1;
        let left = 0;
        while(top <= bottom && left <= right){
            res = this.boundaryTraversal(matrix, res, top, right, bottom, left);
            // console.log(res);
            top++;
            right--;
            bottom--;
            left++;
        }
        return res;
    }
}