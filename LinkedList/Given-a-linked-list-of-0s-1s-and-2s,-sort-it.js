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

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

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
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        head = obj.segregate(head);
        printlist(head);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        if (!head || !(head.next))
            return head;
      
        //creating three dummy nodes to point to beginning of the linked lists.
        let zeroD = new Node(0); 
        let oneD = new Node(0); 
        let twoD = new Node(0); 
      
        //initializing current pointers for three lists.
        let zero = zeroD, one = oneD, two = twoD; 
      
        let curr = head;
        //traversing over the list with a pointer.
        while (curr) {
            
            //we check data at current node and store the node in it's 
            //respective list and update the link part of that list.
            if (curr.data == 0) { 
                zero.next = curr; 
                zero = zero.next; 
                curr = curr.next; 
            } 
            else if (curr.data == 1) { 
                one.next = curr; 
                one = one.next; 
                curr = curr.next; 
            }
            else { 
                two.next = curr; 
                two = two.next; 
                curr = curr.next; 
            } 
        } 
      
        //attaching the three lists containing 0s,1s and 2s respectively.
        if(oneD.next){
            zero.next = oneD.next;
        }
        else{
            zero.next = twoD.next;
        }
        one.next = twoD.next; 
        two.next = null; 
      
        //updating the head of the list.
        head = zeroD.next; 
      
        //deleting dummy nodes.
        zeroD = null; 
        oneD = null; 
        twoD = null; 
      
        return head;
    }
}