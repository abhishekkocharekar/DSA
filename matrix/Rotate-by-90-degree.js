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
        let matrix = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(n);
            for(let j=0;j<n;j++)
            {
                a[j] =parseInt(input_line[i*n+j]);
            }
            matrix[i] = a;
        }
        
        let obj = new Solution();
        obj.rotateby90(matrix, n);
        let s = "";
        for(let i = 0 ; i < n ;i++)
        {
            for(let j = 0; j < n; j++){
                s += matrix[i][j];
                s += " ";
            }
        }    
        console.log(s);
    }
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} matrix
 * @param {number} n
*/
class Solution 
{
    //Function to rotate matrix anticlockwise by 90 degrees.
    rotateby90(matrix, n) 
    { 
        for(let i=0;i<n;i++){
            for(let j=i+1;j<matrix[0].length;j++){
                [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
            }
        }
        let low = 0; 
        let high = matrix.length - 1;
        while(low<high){
            [matrix[low],matrix[high]] = [matrix[high],matrix[low]];
            low++;
            high--;
        }
    } 
}