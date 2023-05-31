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

class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
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
        let ans = obj.findRepeating(arr, n);
        console.log(ans.first + " " + ans.second);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/*
class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}
*/

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {Pair}
*/

class Solution
{
    //Function to find repeated element and its frequency.
    findRepeating(arr, n)
    {
        let times = n - (arr[n-1] - arr[0]);
        if(times === 1) return (new Pair(-1,-1));
        let low = 0;
        let high = n - 1;
        while(low <= high){
            let mid = Math.floor((low + high)/2);
            if(low === mid) {
                // console.log("here?",arr[low],times)
                return (new Pair(arr[low], times));
            }
            if(arr[mid] - arr[low] != mid - low){
                high = mid;
            } else {
                low = mid;
            }
        }
    }
}