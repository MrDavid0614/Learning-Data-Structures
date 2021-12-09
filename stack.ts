class StackNode {
    public next: StackNode | null;
    constructor(public data: any){
      this.next = null;
    }
}

class Stack {
    top: StackNode | null;

    constructor() {
        this.top = null;
    }

    push(data: any): void {
        const stackNode = new StackNode(data);
        stackNode.next = this.top;
        this.top = stackNode;
    }

    pop(): StackNode | null {
        const previousTop = this.top; 
        this.top = this.top ? this.top.next : null;
        return previousTop;
    }

    isEmpty(): boolean {
        return !this.top;
    }
}

const stack = new Stack();
stack.push(10);