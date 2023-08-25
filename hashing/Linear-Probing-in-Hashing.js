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

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let hashSize = parseInt(readLine());
        let sizeOfArray = parseInt(readLine());
        let arr = new Array(sizeOfArray);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<sizeOfArray;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.linearProbing(hashSize, arr, sizeOfArray);
        printArray(res, res.length);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} hashSize
 * @param {number[]} arr
 * @param {number} sizeOfArray
 * @returns {number[]}
*/

class Solution {
    
    //Function to fill the array elements into a hash table 
    //using Linear Probing to handle collisions.
    linearProbing(hashSize, arr, sizeOfArray)
    {
        let res = Array(hashSize).fill(-1);
        for (let i = 0; i < sizeOfArray; i++) {
            if(res[arr[i] % hashSize] === -1){
                res[arr[i] % hashSize] = arr[i]
            } 
            else {
                let counter=0;
                let k=(arr[i])%hashSize;
                let flag = 0;
                while(counter<hashSize&&res[k]!=-1)
                {
                    if(res[k]==arr[i])
                    {
                        flag=1;
                        break;
                    }
                    k=(k+1)%hashSize;
                    counter++;
                }
                if(flag==1)
                    continue;
                if(counter<hashSize) 
                res[k]=arr[i];
            }
        }
        return res;
    }
}