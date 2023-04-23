var myObj = new Proxy({}, {
    set(target, propKey, val) {
        var normalizedKey = propKey.trim().toLowerCase()
        if (normalizedKey === 'name' && typeof val === 'string' && val.length === 7) {
            target[normalizedKey] = val
        } else if (normalizedKey === 'age' && typeof val === 'number' && val >= 25 && val <= 60) {
            target[normalizedKey] = val
        } else if (normalizedKey === 'address' && typeof val === 'string') {
            target[normalizedKey] = val
        } else {
            throw new Error(`Invalid property '${propKey}' or value '${val}'`);
        }
    }
})

//1.The handler.apply() method is a trap for a function call. Here is the syntax:
var person = {
    firstName: 'Ahmed',
    lastName: 'Ali'
}

var getFullName = function (obj) {
    return `${obj.firstName} ${obj.lastName}`
}
// getFullName(person)


var getFullNameProxy = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(...args).toUpperCase()
    }
})

console.log(getFullNameProxy(person))
// console.log(...person)

//2.The handler.has() method is a trap for the [[HasProperty]] or The in operator
var person1 = {
    firstName: 'fatma',
    lastName: 'alaa'
}

var handler1 = {
    has(target, propkey) {
        if (propkey[0] === 'f') {
            return false
        } else {
            return true
        }
    }
}

var proxy1 = new Proxy(person1, handler1)

console.log('firstName' in proxy1)
console.log('lastName' in proxy1)


//3.The handler.isExtensible() method is a trap for the [[IsExtensible]] which determines if an object is extensible
//4. The handler.preventExtensions() method is a trap for the [[PreventExtensions]]
var handler2 = {
    isExtensible(target) {
        if (Reflect.isExtensible(target)) {
            console.log('add property if you want to person1');
            return true
        } else {
            console.log('person1 is not Extensible');
        }
    },
    preventExtensions(target) {
        target['Extensible'] = false
        return Reflect.preventExtensions(target);
    }
}
var proxy2 = new Proxy(person1, handler2)
console.log(Object.isExtensible(proxy2))
Object.preventExtensions(proxy2)
console.log(Object.isExtensible(proxy2))


//5. The handler.deleteProperty() method is a trap for the [[Delete]] 

var handler3 = {
    deleteProperty(target, propKey) {
        if (propKey in target)
            delete target[propKey]
    }
}

var proxy3 = new Proxy(person1, handler3)
delete proxy3.Extensible
delete proxy3.firstName

console.log(person1);
