class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * First [][][][] Last
 */
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    /**
     * Time O(1)
     */
    peek() {
        return this.first;
    }

    /**
     * Time O(1)
     */
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    /**
     * Time O(1)
     */
    dequeue() {
        if (!this.first) {
            return null;
        } else if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
    }
}
