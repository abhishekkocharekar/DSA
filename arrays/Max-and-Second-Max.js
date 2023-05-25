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
        let sizeOfArray = parseInt(readLine());
        let arr = new Array(sizeOfArray);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<sizeOfArray;i++)
            arr[i] = input_ar[i];
        let obj = new Solution();
        let ans = obj.largestAndSecondLargest(sizeOfArray, arr)
        console.log(ans[0] + " " + ans[1]);
        
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * Function to find largest and second largest element
 * @param {number} sizeOfArray
 * @param {number[]} arr
 * @returns {number[]}
*/
class Solution {
  
    largestAndSecondLargest(sizeOfArray, arr)
    {
        let max = -1;
        let secondMax = -1;
        for(let i=0;i<sizeOfArray;i++){
            if(arr[i] > max){
                secondMax = max;
                max = arr[i];
            } else if(arr[i] !== max){
                if(arr[i] > secondMax || secondMax === -1){
                    secondMax = arr[i]
                }
            }
        }
        return [max,secondMax];
    }
}