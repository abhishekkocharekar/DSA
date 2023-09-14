class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

let printlist = (head) => {
    let curr = head;
    console.log(curr.data);
    while(curr.next != null){
        curr = curr.next
        console.log(curr.data);
    }
}

let insertAtStart = (head, newData) => {
    let temp = new Node(newData);
    if(head === null) return temp;

    head.prev = temp;
    temp.next = head;
    return temp;
}

let insertAtEnd = (head, newData) => {
    let temp = new Node(newData);
    if(head === null) return temp;

    let curr = head;
    while(curr.next != null){
        curr = curr.next;
    }
    temp.prev = curr;
    curr.next = temp;
    return head;
}


let head = null;
head = insertAtStart(head, 1);
head = insertAtStart(head, 2);
head = insertAtStart(head, 3);
head = insertAtStart(head, 4);
head = insertAtEnd(head, 5);
head = insertAtEnd(head, 6);
head = insertAtEnd(head, 7);

printlist(head);