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

let deleteHead = (head) => {
    if(head === null || head.next === head) {
        return null;
    }
    head.data=head.next.data;
    head.next=head.next.next;
    return head;
}

let deleteAt = (head, pos) => {
    if(head === null) {
        return null;
    }
    if(pos === 1) return deleteEnd(head);
    let curr = head;
    let i = 0;
    while(i < pos - 2){
        curr = curr.next;
        i = i + 1;
    }
    curr.next = curr.next.next;
    return head;
}

let head = null;
head = insertAtEnd(head, 1);
head = insertAtEnd(head, 2);
head = insertAtEnd(head, 3);
head = insertAtEnd(head, 4);
head = insertAtEnd(head, 5);
printlist(head);
head = deleteAt(head, 3);
console.log("After deleting: ");
printlist(head);