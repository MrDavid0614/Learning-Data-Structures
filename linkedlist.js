class LinkedNode {
    data;
    next;

    constructor(data){
        this.data = data;
    }

}

class LinkedList {
   head;
}

class Main {
    list;

    init(){
        this.list = new LinkedList();

        this.list.head = new LinkedNode(1);
        const secondNode = new LinkedNode(2);
        const thirdNode = new LinkedNode(3);
        
        this.list.head.next = secondNode;
        secondNode.next = thirdNode;
    }

    printList(head){
        let node = head;

        while(node !== undefined){
            console.log(node.data);
            node = node.next;
        }
    }
}

const main = new Main();

main.init();
main.printList(main.list.head);