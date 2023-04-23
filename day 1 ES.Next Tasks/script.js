// Task 1 swap values by destructing
let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x)
console.log(y)

// Task 2 rest parameters and spread operators

function findMinMax(...arr) {
    var min = Math.min(...arr)
    var max = Math.max(...arr)
    return [min, max]
}

var [arr1Min, arr1Max] = findMinMax(4, 2, 77, 2, 12, 323)
console.log(`Min: ${arr1Min}, Max: ${arr1Max}`);

// Task 3 Array API

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var allElemString = fruits.every(function (fruit) {
    return typeof fruit == 'string'
})
console.log(allElemString);

var someStartwithA = fruits.some(function (fruit) {
    return fruit.startsWith('a')
})
console.log(someStartwithA);


var startWith_b_s = fruits.filter(function (fruit) {
    return (fruit.startsWith("b") || fruit.startsWith("s"))
})
console.log(startWith_b_s);

var LikeconcatFruit = fruits.map(function (fruit) {
return 'I like '.concat(fruit) 
})
console.log(LikeconcatFruit);

LikeconcatFruit.forEach(function(fruit){
    console.log(fruit);
})
