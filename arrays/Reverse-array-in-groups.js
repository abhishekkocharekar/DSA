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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let N = input_ar0[0];
        let K = input_ar0[1];
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.reverseInGroups(arr, N, K);
        let S = '';
        for(let i=0;i<N;i++)
        {
            S+=arr[i];
            S+=' ';
        }
        console.log(S);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 */
 
class Solution {
    //Function to reverse every sub-array group of size k.
    reverse(arr,n,left,right)
    {
           //reversing the sub-array from left index to right index.
            while (left < right) { 
                //swapping values at index stored at left and right index.
                let temp = arr[left]; 
                arr[left]=arr[right];
                arr[right]=temp;
                
                //updating values of left and right index.
                left+=1; 
                right-=1;  
            }
    }
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k){
        for(let i = 0;i<n;i+=k){ 
            
            //If (ith index +k) is less than total number of elements it means
            //k elements exist from current index so we reverse k elements 
            //starting from current index.
            if(i+k < n){ 
                //reverse function used to reverse any part of the array.
                this.reverse(arr,n,i,i+k-1);
            }
            //Else k elements from current index doesn't exist. 
            //In that case we just reverse the remaining elements.
            else{
                //reverse function used to reverse any part of the array.
                this.reverse(arr,n,i,n-1);
            }
            
            
        }
    }
}