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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.segragate012(arr, n);
        printArray(arr, n);
    }
}
// } Driver Code Ends


//User function Template for javascript

// The function should do the stated modifications in the given array arr[]
// Do not return anything.

/**
 * @param {number[]} arr
 * @param {number} N
*/

class Solution {
    //Function to segregate 0s, 1s and 2s in sorted increasing order.
    segragate012(arr, N)
    {
        let low = 0;
        let high = N-1;
        for(let i=0;i<=high;i++){
            if(arr[i] === 0){
                [arr[i],arr[low]] = [arr[low],arr[i]];
                low++;
            } else if(arr[i] === 2){
                [arr[i],arr[high]] = [arr[high],arr[i]];
                high--;
                i--;
            }
        }
    }
}