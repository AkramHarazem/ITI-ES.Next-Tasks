// Task 1 default object parameters
function course(obj) {
    var defaultObj = {
        courseName: 'ES6',
        courseDuration: '3days',
        courseOwner: 'JavaScript'
    }
    var ObjKeys = Object.keys(obj)
    var defaultKeys = Object.keys(defaultObj)
    if (ObjKeys > 3 || !ObjKeys.every(key => defaultKeys.includes(key))) {
        throw new Error('Please enter only 3 parameters and change only course name, course Duration, course Owner')
    }
    var result = Object.assign(defaultObj, obj)

    console.log(result)
}


function course1(obj) {
  var defaultMap = new Map([
    ['courseName', 'ES6'],
    ['courseDuration', '3days'],
    ['courseOwner', 'JavaScript']
  ]);

  for (let [key, value] of Object.entries(obj)) {
    if (!defaultMap.has(key)) {
      throw new Error('Please enter only 3 parameters and change only course name, course duration, and course owner');
    }
    defaultMap.set(key, value);
  }

  console.log(defaultMap);
}


function course2({
    courseName= 'ES6',
    courseDuration= '3days',
    courseOwner= 'JavaScript'} = {}) {
    return `${courseName} and ${courseDuration} and ${courseOwner}`
  }

// Task 2 fibonacci series
//a. The parameter passed determines the number of elements

function* fibonacci1(elementsNum) {
    if (arguments.length !== 1 || typeof elementsNum !== 'number' || elementsNum <= 0) {
        throw new Error('Invalid number of parameters. Please provide only one number parameter and positive .')
    }
    let current = 0
    let next = 1
    for (let i = 0; i < elementsNum; i++) {
        yield current;
        [current, next] = [next, current + next]
    }
}

for (let res of fibonacci1(6)) {
    console.log(res)
}

//b.the parameter passed determines the max number not exceed its value.

function* fibonacci2(maxNum) {
    if (arguments.length !== 1 || typeof maxNum !== 'number' || maxNum <= 0) {
        throw new Error('Invalid number of parameters. Please provide only one number parameter and positive .')
    }
    let current = 0
    let next = 1
    while (current <= maxNum) {
        yield current;
        [current, next] = [next, current + next]
    }
}

for (let res of fibonacci2(21)) {
    console.log(res)
}

//Task 3 your own object that has [Symbol.match] method

var myObj = {
    [Symbol.match]: function (str) {
        return str.padEnd(str.length + 1, 'O')
    },
    [Symbol.replace]: function (str, idx) {
        if (str.length > 15) {
            return str.substring(0, idx) + '...'
        } else {
            return str
        }
    }
}

console.log("akram".match(myObj))
console.log("The rain in SPAIN stays mainly in the plain".replace(myObj, 15))

// Task 4 

var iterObj = {
    name: 'ali',
    age: 29,
    [Symbol.iterator]:  function*() {
            for (let key of Object.keys(this)) {
                yield iterObj[key]
            }
        }
}

for (var elem of iterObj) {
    console.log(elem)
}

const iterObj = {
    name: 'ali',
    age: 29,
    [Symbol.iterator]: function* () {
        for (let value of Object.values(this)) {
            yield value;
        }
    }
};

for (let elem of iterObj) {
    console.log(elem);
}































// var obj2 = {
//     name: 'ahmed',
//     age:10,
//     [Symbol.iterator]: function () {
//         var ourKeys = Object.keys(this)
//         var i = 0
//         return {
//             next:()=>{
//                 if (i < ourKeys.length) {
//                     return {
//                         value: this[ourKeys[i++]],
//                         done: false
//                     }
//                 } else {
//                     return {
//                         value: undefined,
//                         done: true
//                     }

//                 }
//             }
//         }
//     }
// }