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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.rearrange(arr, n);
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
 * @param {number} n
 */
 
class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(arr, n){
        let left=0;
        let right=n-1;
        let max = arr[n-1] + 1;
        for(let i=0;i<n;i++){
            if((i+1)%2===0){
                if(i>left){
                    if(i===n-1){
                        arr[i] = ((arr[left] % max) * max);
                    }else {
                        arr[i] = ((arr[left] % max) * max) + arr[i];   
                    }
                } else {
                    arr[i] = (arr[left] * max) + arr[i];   
                }
                left = left + 1;
            } else {
                if(i>right){
                    if(i===n-1){
                        arr[i] = ((arr[right] % max) * max);
                    }else {
                        arr[i] = ((arr[right] % max) * max) + arr[i]; 
                    }
                } else {
                    arr[i] = (arr[right] * max) + arr[i];
                }
                right = right - 1;
            }
        }
        for(let i=0;i<n;i++){
            arr[i] = Math.floor(arr[i] / max);
        }
    }
}