import { MyArray } from './MyArray.js'

const myArr = new MyArray('11', '22', '33', '44');
const myArr2 = new MyArray('55', undefined, '66', '77', myArr);
const myArr3 = new MyArray('99', myArr, '1111', myArr2);
const myArr4 = new MyArray('99', '1010', undefined, undefined, undefined, 222, myArr3);
console.log('myArr4: ', myArr4);
const newMyArr = myArr4.flat(3);
console.log('newMyArr: ', newMyArr);
console.log('myArr: ', myArr);
myArr.unshift(7,8,9,'10', 11, 12, 15);
console.log('myArr: ', myArr);
myArr.shift();
console.log('myArr: ', myArr);

