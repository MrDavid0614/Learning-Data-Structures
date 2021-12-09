class LinkedNode {
    public previous: LinkedNode | null;
    public next: LinkedNode | null;

    constructor(public data: any) {
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: LinkedNode | null;
    tail: LinkedNode | null;

    constructor() {
        this.head = null;
        this.tail = this.head;
    }

    unshift(data: any): LinkedNode {
        const newNode = new LinkedNode(data);

        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            return this.head;
        }

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        return this.head;
    }

    push(data: any): LinkedNode {
        const newNode = new LinkedNode(data);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }
        
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        return this.tail;
    }

    find(data: any): LinkedNode | null {
        let currentNode = this.head;

        while(currentNode?.data !== data && currentNode !== null) {
            currentNode = currentNode.next;
        }

        if(currentNode === null) {
            console.error("No se encontró el nodo.")
            return currentNode;
        }

        return currentNode;
    }

    remove(data: any): LinkedNode | null {
        let node = this.find(data);

        let previousNode = node?.previous;
        let nextNode = node?.next;

        previousNode?.next = nextNode;
        nextNode?.previous = previousNode;

        return node;
    }

    insertAt(index: number, data: any): void {

    }

    removeAt(index: number): LinkedNode {

    }

    getAt(index: number): LinkedNode | null {
        
    }

    reverse(): void {
        let currentNode: LinkedNode | any = this.tail;

        while(currentNode !== null) {
            const tmp = { ...currentNode };
            currentNode.previous = tmp.next;
            currentNode.next = tmp.previous;

            currentNode = tmp.previous;
        }
    }

    getAll(): void {
        let str: string = "";
        let currentNode: LinkedNode | null = this.head;

        while(currentNode !== null) {
            str+= `${ currentNode.data } => `;
            currentNode = currentNode.next;
        }
        
        str += `null`;

        console.log(str);
    }
}

const list = new DoublyLinkedList();

// list.insertAt(0, 5);
// list.insertAt(1, 6);
// list.insertAt(2, 7);
list.unshift(1);
list.unshift(0);
list.push(2);
list.remove(2);
list.getAll();