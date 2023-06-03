//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}
function printArray(arr) {
  let s = "";
  for (let i of arr) {
    s = s + i + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.MinimumDifference(arr, n);
    console.log(res);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    MinimumDifference(arr, n) {
      arr.sort(function(a,b){return a-b});
      let minDiff = arr[1] - arr[0];
      for(let i=1;i<n-1;i++){
          if(minDiff > arr[i+1] - arr[i]){
              minDiff = arr[i+1] - arr[i];
          }
      }
      return minDiff;
    }
}
