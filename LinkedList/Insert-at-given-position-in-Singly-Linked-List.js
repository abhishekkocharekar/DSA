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

let insertAt = (head, newData, pos) => {
    let temp = new Node(newData);

    if(pos === 1){
        temp.next = head;
        return temp;
    }

    let curr = head;
    for(let i=0; i<pos-2 && curr!=null; i++){
        curr = curr.next;
    }
    if(curr===null){
        return head;
    }
    temp.next = curr.next;
    curr.next = temp;
    return head;
}

let head = null;
head = insert(head, 1);
head = insert(head, 2);
head = insert(head, 3);
head = insert(head, 4);
head = insertAt(head, 5, 3);

printlist(head);