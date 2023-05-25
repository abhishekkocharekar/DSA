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
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let d = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.rotateArr(arr, d, n);
        let S = '';
        for(let i=0;i<n;i++)
        {
            S+=arr[i];
            S+=' ';
        }
        console.log(S);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 * @param {number} n
 */
 
class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n){
        if(d>n) d = d % n;
        let counter = d-1;
        for(let i=0;i<=counter;i++){
            [arr[i],arr[counter]] = [arr[counter],arr[i]];
            counter --;
        }
        counter = n-1;
        for(let i=d;i<=counter;i++){
            [arr[i],arr[counter]] = [arr[counter],arr[i]];
            counter --;
        }
        counter = n -1;
        for(let i=0;i<=counter;i++){
            [arr[i],arr[counter]] = [arr[counter],arr[i]];
            counter --;
        }
        return arr;
    }
}