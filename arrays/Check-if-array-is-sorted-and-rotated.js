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
        let num = parseInt(readLine());
        let arr = new Array(num);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<num;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        if(obj.checkRotatedAndSorted(arr, num)){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} num
 * @returns {boolean}
*/

class Solution {
    //Function to check if array is sorted and rotated.
    checkRotatedAndSorted(arr, num)
    {
        let increasing,changed = false;
        if(arr[0] < arr[1]) increasing = true;
        else increasing = false;
        for(let i=2; i<num ; i++){
            console.log(i);
            if(!changed){
                if(increasing){
                    if(arr[i] < arr[i-1]){
                        console.log("dont go here")
                        changed = true;
                    }
                } else if(!increasing){
                    if(arr[i] > arr[i-1]){
                        console.log("deff dont go here")
                    changed = true;
                    }
                }
            } else {
                if(increasing){
                    if(arr[i] < arr[i-1]){
                        return "No"
                    }
                } else if(!increasing){
                    if(arr[i] > arr[i-1]){
                        return "No"
                    }
                }
            }
        }
        if(changed){
            console.log("here");
            return "Yes";
        }else{
            console.log("there")
            return "No";   
        }
    }
}