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
    checkRotatedAndSorted(arr, n)
    {
        if (n == 1) return true;
	// checks if it is increasing or decreasing with rotation
	let isIncreasing = arr[0] > arr[n - 1];
	let incCount = 0,
		decCount = 0;

	for (let i = 0; i < n - 1; i++) {
		// this check is if cur less than next element (INCREASING) and if it is decreasing
		// we allow only one exception.
		if (arr[i + 1] > arr[i] && !isIncreasing) {
			decCount++;

			// this check is if cur_ele less than next_ele (Decreasing) and if it is increasing
			// we will allow only single exception.
		} else if (arr[i + 1] < arr[i] && isIncreasing) {
			incCount++;
		}
	}
	// if there are more than 1 un sorted array in array. then return false
	return incCount == 1 || decCount == 1 ? true : false;
    }
}