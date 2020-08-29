/*1) Переписать функцию-конструктор MyArray на классы. Дописать методы shift, unshift.*/
export class MyArray{
    constructor(...items) {
        this.length = 0;
        for (let i = 0; i < items.length; i++) {
            this[this.length] = items[i];
            this.length++;
        };
    }

    pop() {
        let lastItem = this[this.length-1];
        delete this[this.length-1];
        this.length = this.length - 1;
        return lastItem;
    };

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    };

    forEach(callback, thisArg = this) {
        for(let i = 0; i < thisArg.length; i++) {
            callback(thisArg[i], i, thisArg);
        }
    };

    concat(array) {
        let result = new MyArray();
        for (let i = 0; i < this.length; i++) {
            result.push(this[i]);
        }
        for(let i = 0; i < array.length; i++) {
            result.push(array[i]);
        }
        return result;
    }

    static isMyArray(array) {
        return array instanceof MyArray;
    }

    flat (depth = 1) {
        let newArray = new MyArray();
        if (depth < 0) {
            console.error("depth must be a positive value");
            return;
        }
        if (depth === 0) {
            newArray = newArray.concat(this);
            return newArray;
        }
        for(let i = 0; i < this.length; i++){
            if(MyArray.isMyArray(this[i])) {
                const buffer = this[i].flat(depth - 1);
                newArray = newArray.concat(buffer);
            } else if (this[i] !== undefined) {
                newArray.push(this[i]);
            }
        }
        return newArray;
    }

    unshift(...args) {
        const newArrLength = args.length + this.length;
        for (let i = newArrLength - 1; i > args.length - 1; i--) {
            this[i] = this[i - args.length];
        }
        for (let i = 0; i < args.length; i++) {
            this[i] = args[i];
        }
        return this.length += args.length;
    }

    shift() {
        const firstItem = this[0];
        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
        }
        delete this[this.length-1];
        this.length -= 1;

        return firstItem;
    }

    [Symbol.iterator]() {
        return{
            iterable: this,
            iteration: 0,

            next() {
                if(this.iteration > this.iterable.length - 1){
                    return {
                        done: true
                    }
                }
                return {
                    value: this.iterable[this.iteration++],
                    done: false,
                }
            }
        }
    }
};