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

let FindMid = (head) => {

    if(head === null) return null;
    let slow = head;
    let fast = head;
    while(fast !== null && fast?.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}

let head = null;
head = insert(head, 1);
head = insert(head, 2);
head = insert(head, 3);
head = insert(head, 4);
head = insert(head, 5);
head = insert(head, 6);
console.log("Mid: ", FindMid(head));

printlist(head);