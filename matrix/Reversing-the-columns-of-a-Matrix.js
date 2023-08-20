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
        obj.reverseCol(matrix);
        let s = "";
        for(let i = 0 ; i < n ;i++)
        {
            for(let j = 0; j < m; j++)
            {
                s+=matrix[i][j];
                s+=" ";   
            }
        }
        console.log(s);
    }
}


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} matrix
*/
class Solution
{
    //Function to reverse the columns of a matrix.
    reverseCol(matrix)
    {
        let n1 = matrix.length;
        let m1 = matrix[0].length;
        let left = 0;
        let right = m1 - 1;
        let i=0;
        while(i<n1){
            left = 0;
            right = m1 - 1;
            while(left<right){
                [matrix[i][left],matrix[i][right]] = [matrix[i][right], matrix[i][left]];
                left++;
                right--;
            }
            i++;
        }
        return matrix;
    }
}