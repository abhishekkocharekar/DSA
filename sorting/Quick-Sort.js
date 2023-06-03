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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    if(arr[i] === -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_line = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) {
        arr[j] = input_line[j];
    }
    let obj = new Solution();
    obj.quickSort(arr,0,n-1);
    printArray(arr,arr.length);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */
 
class Solution
{
    partition(arr, low, high){
        let p = arr[high];
        let i = low - 1;
        let j;
        for(j = low;j<high;j++){
            if(arr[j] < p){
                i++;
                [arr[i],arr[j]] = [arr[j],arr[i]];        
            } 
        }
        [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
        return i+1;
    }
    
    quickSort(arr, low, high){
        if (low < high)
        {
            let pi = this.partition(arr, low, high);
            this.quickSort(arr, low, pi - 1); 
            this.quickSort(arr, pi + 1, high);
        }
        return arr;
    }
    
}