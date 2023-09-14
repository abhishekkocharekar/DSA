class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let printlist = (head) => {
    if(head === null) return;
    let curr = head;
    console.log(curr.data);
    curr = curr.next;
    while(curr != head){
        console.log(curr.data);
        curr = curr.next;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head;

printlist(head);