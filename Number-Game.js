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

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let obj = new Solution();
    let res = obj.numGame(n);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */
class Solution {
    gcd(a, b) {
        while (b) {
            let t = a;
            a = b;
            b = t % b;
        }
        return a;
    }

    numGame(n) {
        let ans = 1;
        for (let i = 2; i <= n; i++) {
            ans = Math.floor((ans * i) / this.gcd(ans, i)) % 1000000007;
        }
        return ans;
    }
}
