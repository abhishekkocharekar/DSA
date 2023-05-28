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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.pattern( n);
        printList(res, res.length)
    }
}// } Driver Code Ends





// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} n
 * @returns {number[]}
*/

class Solution{
    recursion(arr,num, dec){
        arr.push(num);
        if(num == arr[0]) {
            return arr;
        }
        if(num > 0 && dec === false) {
            return this.recursion(arr, num - 5, dec);
        }
        else {
            dec = true;
            return this.recursion(arr, num + 5, dec);
        }
    }
    pattern(n){
        let arr = [];
        arr[0] = n;
        let res = this.recursion(arr, n - 5, false)
        return res;
    }
}

