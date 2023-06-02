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
        let p = input_ar0[2];
        let A = new Array(n);
        let B = new Array(m);
        let C = new Array(p);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            A[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<m;i++)
            B[i] = input_ar2[i];
        let input_ar3 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<p;i++)
            C[i] = input_ar3[i];
        let obj = new Solution();
        let res = obj.mergeThree(A, B, C);
        printArray(res, res.length);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @returns {number[]}
*/

class Solution {
    //Function to merge three sorted arrays into a single array.
    mergeTwo(arr1,arr2){
        let res = [];
        let i=0,j=0;
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] > arr2[j]){
                res.push(arr2[j]);
                j++;
            } else {
                res.push(arr1[i]);
                i++;
            }
        }
        if(i<arr1.length){
            while(i<arr1.length){
                res.push(arr1[i]);
                i++;
            }
        } else {
            while(j<arr2.length){
                res.push(arr2[j]);
                j++
            }
        }
        return res;
    }
    mergeThree(arr1, arr2, arr3)
    {
        let res = [];
        let i=0,j=0,k=0;
        while(i<arr1.length && j<arr2.length && k<arr3.length){
            if(arr1[i] <= arr2[j] && arr1[i] <= arr3[k]){
                res.push(arr1[i]);
                i++;
            } else if(arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
                res.push(arr2[j]);
                j++;
            } else {
                res.push(arr3[k]);
                k++;
            }
        }
        let merged;
        if(i === arr1.length){
            merged = this.mergeTwo(arr2.slice(j),arr3.slice(k));
        } else if(j === arr2.length){
            merged = this.mergeTwo(arr1.slice(i),arr3.slice(k));
        } else {
            merged = this.mergeTwo(arr1.slice(i),arr2.slice(j));
        }
        k=0;
        while(k<merged.length){
                res.push(merged[k]);
                k++;
        }
        return res;
    }
}