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
        let array = new Array(n);
        let mp = new Map();
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0; i<n; i++){
            array[i] = input_ar1[i];
            mp.set(array[i], 0);
        }
        for(let i=0; i<n; i++){
            mp.set(array[i], mp.get(array[i]) + 1);
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar2[0];
        let b = input_ar2[0];
        
        let original = array;
        let k1=0, k2=0, k3=0, kk1=0, kk2=0, kk3=0;
        for(let i=0; i<n; i++){
            if(original[i]>b)
                k3++;
            else if(original[i]<=b && original[i]>=a)
                k2++;
            else if(original[i]<b)
                k1++;
        }
        
        let obj = new Solution();
        obj.threeWayPartition(array, a, b);
        
        for(let i=0; i<k1; i++){
            if(array[i]<b)
                kk1++;
        }
        for(let i=k1; i<k1+k2; i++){
            if(array[i]<=b && array[i]>=a)
                kk2++;
        }
        for(let i=k1+k2; i<k1+k2+k3; i++){
            if(array[i]>b)
                kk3++;
        }
        let ok = 0;
        if(k1==kk1 && k2 ==kk2 && k3 == kk3)
            ok = 1;
        for(let i=0; i<array.length; i++)
            mp.set(array[i], mp.get(array[i]) - 1);
        for(let i=0; i<array.length; i++)
            if(mp.get(array[i]) !== 0)
                ok = 0;
        if(ok)
            console.log("1");
        else
            console.log("0");
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
*/

class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(arr, a, b)
    {
        let start = 0;
        let end = arr.length - 1;
        
        for (let i = 0; i <= end; i++) {
            if (arr[i] < a) {
                [arr[i], arr[start]] = [arr[start], arr[i]];
                start++;
            } else if (arr[i] > b) {
                [arr[i], arr[end]] = [arr[end], arr[i]];
                end--;
                i--; 
            }
        }
        return arr;
    }
}