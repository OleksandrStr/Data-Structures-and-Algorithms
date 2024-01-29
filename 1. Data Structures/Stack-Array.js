class Stack {
    constructor() {
        this.data = [];
    }

    /**
     * Time O(1)
     */
    peek() {
        return this.data[this.data.length - 1];
    }

    /**
     * Time O(1)
     */
    push(value) {
        this.data.push(value);
    }

    /**
     * Time O(1)
     */
    pop() {
        this.data.pop();
    }
}
