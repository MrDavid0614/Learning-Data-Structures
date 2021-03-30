class LinkedNode {
    data;
    next;

    constructor(data){
        this.data = data;
    }

}

class LinkedList {
    head;

    printList(){
       let node = this.head;

        while(node !== undefined){
            console.log(node.data);
            node = node.next;
        }
    }
}

class Main {
    
    static init(){
        const list = new LinkedList();

        list.head = new LinkedNode(1);
        const secondNode = new LinkedNode(2);
        const thirdNode = new LinkedNode(3);
        
        list.head.next = secondNode;
        secondNode.next = thirdNode;

        list.printList();
    }
}

Main.init();