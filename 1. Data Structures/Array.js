class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    /**
     * Time O(1)
     */
    get(index) {
        return this.data[index];
    }

    /**
     * Time O(1)
     */
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    /**
     * Time O(1)
     */
    pop() {
        const deletedItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }

    /**
     * Time O(N)
     */
    insertAtIndex(index, value) {
        for (let i = this.length - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = value;
        this.length++;
    }

    /**
     * Time O(N)
     */
    deleteAtIndex(index) {
        const deletedItem = this.data[index];

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;

        return deletedItem;
    }
}

