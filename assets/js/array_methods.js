/*3. Сделайте функцию, которая определяет, есть в массиве заданный элемент или нет.*/
export function isIncludesItem(array, item) {
    return array.includes(item);
}

/*4. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
И так, пока сумма не станет однозначным числом (9 и менее).*/
export function sumDigitsOfNumber(number) {
    let result = number.toString();
    while (result.length > 1) {
        result = result.split('')
            .reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue)).toString();
    }
    return result;
}

/*5.  Напишите функцию, которая возвращает массив состоящий только из уникальных элементов из каждого массива*/
export function getArrayWithUniqueItems(...arrays) {
    return arrays.map(array => array.filter(item => array.filter(elem => elem === item).length === 1)).flat();
}