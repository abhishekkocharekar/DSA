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
        let input_ar1 = readLine().split(' ');
        let s = input_ar1[0];
        let p = input_ar1[1];
        let obj = new Solution();
        let res = obj.isSubSequence(s, p);
        if(res === true){
            console.log("True");
        }
        else{
            console.log("False");
        }
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript



/**
 * @param {string} A
 * @param {string} B
 * @returns {bool}
*/

class Solution{
    isSubSequence(A, B){
        for(let i=0; i<B.length; i++){
            if(A.length === 0) return true;
            if(B[i] === A[0]){
                A = A.slice(1,A.length,1);   
            }
        }
        return A.length === 0 ? true : false
    }
}
