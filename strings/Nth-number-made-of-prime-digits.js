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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split();
        let n = parseInt(input_line[0]);
        let obj = new Solution();
        let ans = obj.primeDigits(n);
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/
class Solution 
{
    primeDigits(n)
    {
        n--;
        
        let ans = new Array(1000);
        ans.fill(0);
        
        let i, j, digits=0, Count=0, k=0;
        let a=[2,3,5,7];
        
        ans[0]=2;
        ans[1]=3;
        ans[2]=5;
        ans[3]=7;
        k=4;
    
        for(i=22; i<2300; i++)
        {
            let p=i;
            digits=0;
            Count=0;
            
            while(p)
            {
                digits++;
                let r=p%10;
                p=Math.floor(p/10);
                
                for(j=0;j<4;j++)
                {
                    if(r==a[j])
                    {
                        Count++;
                        break;
                    }
                }
            }
        
            if(Count==digits)
                ans[k++]=i;
            else
                continue;
        }
	    return ans[n];
    }
}