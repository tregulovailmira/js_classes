export function isIncludesItem(array, item) {
    return array.includes(item);
}

export function sumDigitsOfNumber(number) {
    let result = number.toString();
    while (result.length > 1) {
        result = result.split('').reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue)).toString();

    }
    return result;
}

export function getArrayWithUniqueItems(...arrays) {
    return arrays.map(array => array.filter(item => array.filter(elem => elem === item).length === 1)).flat();
}