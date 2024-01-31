class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Top [][][][] Bottom
 */
class Stack {
    constructor() {
        this.top = null;
    }

    /**
     * Time O(1)
     */
    peek() {
        return this.top;
    }

    /**
     * Time O(1)
     */
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    /**
     * Time O(1)
     */
    pop() {
        if (this.top) {
            this.top = this.top.next;
        }
    }
}
