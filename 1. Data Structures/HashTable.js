class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.data.length;
    }

    /**
     * Time O(1) amortized
     */
    set(key, value) {
        const address = this._hash(key);
        if (this.data[address]) {
            for (let i = 0; i < this.data[address].length; i++) {
                if (this.data[address][i].key === key) {
                    this.data[address][i].value = value;
                    return;
                }
            }
        } else {
            this.data[address] = [];
        }

        this.data[address].push({key, value});
    }

    /**
     * Time O(1) amortized
     */
    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i].key === key) {
                    return currentBucket[i].value;
                }
            }
        }
    }

    /**
     * Time O(1) amortized
     */
    remove(key) {
        const address = this._hash(key);
        if (this.data[address]) {
            for (let i = 0; i < this.data[address].length; i++) {
                if (this.data[address][i].key === key) {
                    this.data[address].splice(i, 1);
                    return;
                }
            }
        }
    }

    /**
     * Time O(N)
     */
    getKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j].key);
                }
            }
        }

        return keys;
    }

    /**
     * Time O(N)
     */
    getValues() {
        const values = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    values.push(this.data[i][j].value);
                }
            }
        }

        return values;
    }
}
