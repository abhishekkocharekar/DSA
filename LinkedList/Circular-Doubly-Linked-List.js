class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
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

let insertAtHead = (head, value) => {
    let temp = new Node(value);
    if(head === null) {
        temp.next = temp;
        temp.prev = temp;
        return temp;
    }
    temp.next = head;
    temp.prev = head.prev;
    head.prev = temp;
    temp.prev.next = temp;
    return temp;
}

let head = null;
head = insertAtHead(head, 5);
head = insertAtHead(head, 4);
head = insertAtHead(head, 3);
head = insertAtHead(head, 2);
head = insertAtHead(head, 1);
printlist(head);