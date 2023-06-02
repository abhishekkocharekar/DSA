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
        let N = parseInt(readLine());
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.inversionCount(arr, N));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    constructor(){
        this.res = 0;
    }
    merge (arr,low,mid,high) {
        let arr1 = arr.slice(low,mid + 1);
        let arr2 = arr.slice(mid + 1,high + 1);
        let i=0,j=0;
        let k = low;
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] <= arr2[j]){
                arr[k++] = arr1[i++];
            } else {
                arr[k++] = arr2[j++];
                this.res += (mid - low + 1 - i)
            }
        }
        while(i<arr1.length){
            arr[k++] = arr1[i++];
        }
        while(j<arr2.length){
            arr[k++] = arr2[j++];
        }
    }
    mergeSort(arr,low,high){
        if(low<high){
            let mid = Math.floor(low + ((high-low)/2));
            this.mergeSort(arr,low,mid);
            this.mergeSort(arr,mid+1,high);
            this.merge(arr,low,mid,high);
        }
    }
    inversionCount(arr, N)
    {
        this.mergeSort(arr,0,N-1)
        return this.res;
    }
}