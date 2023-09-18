//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}



class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = null;

// function to print the linkedlist
function printlist(head){
    let current = head;
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        
        let input1 = readLine().split(' ');
        let _n = input1[0];
        let n = input1[1];
        
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<_n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        
        let obj = new Solution();
        let res = obj.getNthFromLast(head, n);
        console.log(res);
    }
}

// } Driver Code Ends


/*

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
/**
* @param Node head
* @param number n

* @returns number
*/
    getNthFromLast(head, n) {
        let curr = head;
        let count = 1;
        while(curr.next !== null){
            curr = curr.next;
            count++;
        }
        if(count < n) return -1;
        curr = head;
        for(let i=0; i<count-n; i++){
            curr = curr.next;
        }
        return curr.data;
    }
}
        
