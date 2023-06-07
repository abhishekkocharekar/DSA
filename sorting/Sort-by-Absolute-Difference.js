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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let N = input_ar0[0];
        let K = input_ar0[1];
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.sortABS(arr, N, K);
        printArray(arr, N);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
*/

class Solution {
    //Function to sort the array according to difference with given number.
    getAbsDiff(a, b, k) {
        return Math.abs(a - k) > Math.abs(b - k);
    }
    quick(arr, K) {
        if(arr.length < 2) {
            return arr;
        }
        let l = [], r = [], pivot = arr.slice(-1)[0];
        // console.log('arr', arr, pivot, arr.length);
        for(let i = 0; i < arr.length - 1; i++) {
            if(this.getAbsDiff(arr[i], pivot, K)) {
            // if(arr[i] <= pivot) {
                r.push(arr[i])
            } else l.push(arr[i])
        }
        const left = this.quick(l, K);
        const right = this.quick(r, K);
        return [...left, pivot, ...right];
        
    }
    
    sortABS(arr, N, K)
    {
        this.quick(arr, K).forEach( (data, i)  => arr[i] = data)
    }
}