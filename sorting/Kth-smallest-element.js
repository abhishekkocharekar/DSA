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
        let k = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.kthSmallest(arr, n, k));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    
    // constructor(){
    //     this.array = arr;
    // }
    
    
    
    kthSmallest(arr, n, k)
    {
        function solution(low,high){
            let piv = arr[high];
            let i = low - 1;
            let j;
            for(j = low;j<high;j++){
                if(arr[j] < piv){
                    i++;
                    [arr[i],arr[j]] = [arr[j],arr[i]];        
                } 
            }
            [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
            return i+1;
        }
        let low = 0;
        let high = n-1;
        let p;
        while(low<=high){
            p = solution(low,high);
            if(p===k-1){
                return arr[p];
            }
            else if(p>k-1){
                high = p - 1;
            } else {
                low = p + 1;
            }
        }
        return -1;
    }
}