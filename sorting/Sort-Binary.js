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

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let A = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            A[i] = input_ar1[i];
        let obj = new Solution();
        obj.binSort(A, N);
        printArray(A, N);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} N
*/

class Solution {
    //Function to sort the binary array.
    binSort(arr, N)
    {
        let i = -1;
        for(let j = 0;j<arr.length;j++){
            if(arr[j] === 0){
                i++;
                [arr[i],arr[j]] = [arr[j],arr[i]];        
            } 
        }
        return arr;
    }
}