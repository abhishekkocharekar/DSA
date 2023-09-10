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

let search = (head, x) => {
    let curr = head;
    let pos = 1;
    while(curr != null){
        if(curr.data === x) return pos;
        pos++;
        curr = curr.next;
    }
    return -1;
}

let head = null;
head = insert(head, 10);
head = insert(head, 20);
head = insert(head, 33);
head = insert(head, 40);
head = insert(head, 50);
x = search(head, 0);

console.log(x);