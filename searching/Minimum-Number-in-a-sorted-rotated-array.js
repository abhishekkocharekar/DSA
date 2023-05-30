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
        let a = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.minNumber(a, 0, n-1));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 * @returns {number}
*/

class Solution
{
    //Function to find the minimum element in sorted and rotated array.
    minNumber(arr, low, high)
    {
        if(arr[low] < arr[high]) {
            return arr[low];
        }
        let mid;
        while(low <= high){
            if(high - low === 1) {
                return Math.min(arr[high],arr[low]);
            }
            if(arr[mid] < arr[mid-1]){
                return arr[mid];
            }
            if(arr[mid] > arr[mid+1]){
                return arr[mid + 1];  
            } 
            mid = Math.floor((low+high)/2);
            if(arr[low] > arr[mid]){
                high = mid;
            } else if(arr[high] < arr[mid]){
                low = mid;
            }
        }
    }
}