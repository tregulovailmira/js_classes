import { MyArray } from './MyArray.js'
import {isIncludesItem, sumDigitsOfNumber, getArrayWithUniqueItems} from './array_methods.js'

const myArr = new MyArray('99', '1010', undefined, undefined, undefined, 222, new MyArray('99', new MyArray('11', '22', '33', '44'), '1111', new MyArray('55', undefined, '66', '77', new MyArray('11', '22', '33', '44'))));
console.log('myArr: ', myArr);
const newMyArr = myArr.flat(3);
console.log('newMyArr(flat): ', newMyArr);
newMyArr.unshift(7,8,9,'10');
console.log('newMyArr.unshift: ', newMyArr);
newMyArr.shift();
console.log('newMyArr.shift: ', newMyArr);

console.log('is includes item: ', isIncludesItem([1, 5, 6, 9, 12], 15));
console.log('sum digits of number: ', sumDigitsOfNumber(173));
console.log(getArrayWithUniqueItems([1,1,1,2,3,4,5,6,6,7,7,7,8,9,10], [43, 5, 55, 68]))