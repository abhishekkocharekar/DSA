class Node{
    constructor(data){
        this.data = data;
        this.next = null;
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

let insert = (head, newData) => {
    let temp = new Node(newData);
    if(head === null) return temp;

    let curr = head;
    while(curr.next !== null){
        curr = curr.next;
    }

    curr.next = temp;
    return head;
}

let sortedInsert = (head, newData) => {
    let temp = new Node(newData);

    if(head === null){
        temp.next = head;
        return temp;
    }

    if(head.data > newData){
        temp.next = head;
        return temp;
    }

    let curr = head;
    while(curr.next !== null && curr.next.data < newData){
        curr = curr.next;
    }
    temp.next = curr.next;
    curr.next = temp;
    return head;
}

let head = null;
head = insert(head, 3);
head = insert(head, 4);
// head = insert(head, 4);
// head = insert(head, 5);
head = sortedInsert(head, 2);

printlist(head);