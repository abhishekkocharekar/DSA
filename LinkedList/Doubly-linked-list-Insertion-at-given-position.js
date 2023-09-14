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
        this.prev = null;
    }
}

function printlist(head){
    let current = head; 
    if(current){
        while(current.next !== null){
            current = current.next;
        }
        while(current.prev !== null){
            current = current.prev;
        }
    }
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}

function insert(head, x){
    if(head === null){
        return (new Node(x));
    }
    let n = new Node(x);
    head.next = n;
    n.prev = head;
    head = n;
    return head;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = null;
        let root = null;
        for(let i=0;i<n;i++){
            head = insert(head, input_ar1[i]);
            if(root === null){
                root = head;
            }
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let pos = input_ar2[0];
        let data = input_ar2[1];
        let obj = new Solution();
        obj.addNode(root, pos, data);
        printlist(root);
        
    }
}
// } Driver Code Ends


//Back-end complete function Template for javascript

/**
 * @param {Node} head
 * @param {number} pos
 * @param {number} data
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
*/

class Solution {
    addNode(head, pos, data)
    {
        let newnode = new Node(data);         
        let cur = head;
        
        for (let i=0; i<pos; i++)               
            cur=cur.next;
            
        if (cur.next === null) {                   
            cur.next = newnode;                 
            newnode.prev = cur;
        } else { 
            newnode.next = cur.next;
            cur.next = newnode; 
            newnode.next.prev = newnode;
            newnode.prev = cur;             
        }
    }
    
}