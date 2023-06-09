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
        let N = parseInt(input_line[0]);
        input_line = readLine().split(' ').map(x=>parseInt(x));
        let arr = new Array(N);
        for(let i=0;i<N;i++){
            arr[i]=input_line[i];
        }
        let obj = new Solution();
        let ans = obj.circularSubarraySum(arr, N);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {[number[]} arr
 * @param {number} N
 * @returns {number} 
*/
class Solution {
    //Function to find maximum circular subarray sum.
    circularSubarraySum(arr, N){
        let ogArr = JSON.parse(JSON.stringify(arr));
        let max = arr[0];
        for(let i=1;i<N;i++){
            if(arr[i] + arr[i-1] > arr[i]){
                arr[i] = arr[i] + arr[i-1];
            }
            if(max < arr[i]){
                max = arr[i];
            }
        }
        if(max<0) return max;
        let min = ogArr[0];
        let sum = ogArr[0];
        for(let i=1;i<N;i++){
            sum = sum + ogArr[i];
            if(ogArr[i] + ogArr[i-1] < ogArr[i]){
                ogArr[i] = ogArr[i] + ogArr[i-1];
            }
            if(min > ogArr[i]){
                min = ogArr[i];
            }
        }
        return Math.max(max,sum-min);
    } 
}