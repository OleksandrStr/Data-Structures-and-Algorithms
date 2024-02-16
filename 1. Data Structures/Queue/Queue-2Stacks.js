/**
 * First [1][2][3][4]
 * Last [4][3][2][1]
 */
class Queue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    /**
     * Time O(1)
     */
    peek() {
        if (this.first.length) {
            return this.first[0];
        }
        return this.last[this.last.length - 1];
    }

    /**
     * Time O(N)
     */
    enqueue(value) {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.push(value);
    }

    /**
     * Time O(N)
     */
    dequeue() {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.pop();
    }
}