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
        let n = input_ar0[0];
        let m = input_ar0[1];
        let arr1 = new Array(n);
        let arr2 = new Array(m);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr1[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<m;i++)
            arr2[i] = input_ar2[i];
        let obj = new Solution();
        let res = obj.findUnion(arr1, arr2, n, m);
        printArray(res, res.length);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
*/

class Solution {
    //Function to return a list containing the union of the two arrays. 
    findUnion(arr1, arr2, n, m)
    {
        const res = new Set();
        let i = 0,j = 0;
        while(i<arr1.length || j<arr2.length){
            if(i<arr1.length && j<arr2.length) {
                if(arr1[i] < arr2[j]){
                    res.add(arr1[i]);
                    i++;
                } else {
                    res.add(arr2[j]);
                    j++;
                }
                // console.log(i,j);
            } else if(i<arr1.length){
                res.add(arr1[i]);
                i++;
            } else if(j<arr2.length){
                res.add(arr2[j]);
                j++;
            } 
        }
        if(res.size == 0) return [-1];
        return Array.from(res);
    }
}