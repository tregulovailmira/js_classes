/*2) Реализовать класс RangeValidator, со следующими свойствами:
    ■  from (number);
    ■  to (number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.*/
export class RangeValidator {
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }

    set from(from) {
        if(typeof from !== 'number') {
            throw new TypeError('"From" must be a number');
        }
        if(from > this.to) {
            throw new SyntaxError('"From" must be less than "to"!')
        }
        this._from = from;
    }
    
    get from() {
        return this._from;
    }

    set to(to) {
        if(typeof to !== 'number') {
            throw new TypeError('"To" must be a number');
        }
        if(to < this.from) {
            throw new SyntaxError('"From" must be less than "to"!')
        }
        this._to = to;
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this.from, this.to];
    }

    validate(number) {
        if(number < this.from || number > this.to) {
            throw new RangeError('number is not in the range');
        }
        return true;
    }
}