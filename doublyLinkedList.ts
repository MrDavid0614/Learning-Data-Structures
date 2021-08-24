class LinkedNode {
    public previous: LinkedNode | null;
    public next: LinkedNode | null;

    constructor(public value: any) {
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    private nodes: LinkedNode[];

    constructor() {
        this.nodes = [];
    }

    get head(): LinkedNode {
        return this.nodes[0] || null;
    }

    get tail(): LinkedNode {
        return this.nodes[ this.size - 1 ] || null;
    }

    get size(): number {
        return this.nodes.length;
    }

    insertAt(index: number, value: any): void {
        const newNode = new LinkedNode(value);
        const previousNode = this.nodes[ index - 1 ] || null ;
        const nextNode = this.nodes[ index + 1 ] || null;

        if(previousNode !== null) previousNode.next = newNode || null;

        newNode.previous = previousNode;
        newNode.next = nextNode;

        this.nodes.splice(index, 0, newNode);
    }

    removeAt(index: number): LinkedNode {
        const previousNode = this.nodes[ index - 1 ] || null;
        const nextNode = this.nodes[ index + 1 ] || null;
        const deletedNode = this.nodes[ index ];

        previousNode.next = nextNode;
        nextNode.previous = previousNode;
        this.nodes.splice(index, 1);
        return deletedNode;
    }

    clear(): void {
        this.nodes = [];
    }

    getAt(index: number): LinkedNode | null {
        if(index >= this.size) {
            console.error('Este índice no existe.');
            return null;
        }

        return this.nodes[index];
    }

    reverse(): void {
        let currentNode: LinkedNode | any = this.tail;

        while(currentNode !== null) {
            const tmp = { ...currentNode };
            currentNode.previous = tmp.next;
            currentNode.next = tmp.previous;

            this.nodes.push(currentNode);
            currentNode = tmp.previous;
        }

        this.nodes.splice(0, this.size / 2);
    }

    getAll(): void {
        let str = "";
        let currentNode: LinkedNode | null = this.head;

        while(currentNode !== null) {
            str+= `${ currentNode.value } => `;
            currentNode = currentNode.next;
        }
        
        str += `null`;

        console.log(str);
    }
}

const list = new DoublyLinkedList();

list.insertAt(0, 5);
list.insertAt(1, 6);
list.insertAt(2, 7);
list.getAll();
list.reverse();
list.getAll();