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

let insertAtEnd = (head, value) => {
    let temp = new Node(value);
    if(head === null) {
        temp.next = temp;
        return temp;
    }
    temp.next = head.next;
    head.next = temp;
    let x = head.data;
    head.data = temp.data;
    temp.data = x;
    return temp;
}

let head = null;
head = insertAtEnd(head, 5);
head = insertAtEnd(head, 4);
head = insertAtEnd(head, 3);
head = insertAtEnd(head, 2);
head = insertAtEnd(head, 1);
printlist(head);