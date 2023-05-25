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
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar[i];
        let obj = new Solution();
        console.log(obj.missingNumber(arr, n));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution
{
    //Function to find the smallest positive number missing from the array.
    missingNumber(arr, n)
    {
        let counter = 0;
        for(let i=0;i<n;i++){
            if(arr[i]>0){
                arr[counter] = arr[i];
                counter++;
            }
        }
        if(counter === 0) {
            return 1;
        }
        for(let i=0;i<counter;i++){
            let element = arr[i];
            if(element < 0){
                element = element * -1;
            }
            if(arr[element - 1]>0){
                if(element - 1 < counter){
                    arr[element - 1] = arr[element - 1] * -1;   
                }
            }
        }
        for(let i=0;i<counter;i++){
            if(arr[i] > 0){
                return i + 1;   
            }
        }
        return counter + 1;
    }
}