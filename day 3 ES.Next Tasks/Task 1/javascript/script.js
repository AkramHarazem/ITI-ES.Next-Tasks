// Task 1
// class Shape {
//     #Width;
//     #Height;
//     constructor(l1, l2) {
//         if (this.constructor == Shape) {
//             throw 'abstract class'
//         }
//         if (typeof l1 !== 'number' || typeof l2 !== 'number' || l1 <= 0 || l2 <= 0) {
//             throw new Error("Please enter only numbers and positive")
//         }
//         this.#Width = l1
//         this.#Height = l2
//     }
//     get width() {
//         return this.#Width
//     }
//     set width(val) {
//         if (typeof val !== 'number' || val <= 0) {
//             throw new Error("Please enter only numbers and positive")
//         }
//         this.#Width = val
//     }
//     get height() {
//         return this.#Height
//     }
//     set height(val) {
//         if (typeof val !== 'number' || val <= 0) {
//             throw new Error("Please enter only numbers and positive")
//         }
//         this.#Height = val
//     }

//     area() {
//         return this.#Width * this.#Height
//     }
//     perimeter() {
//         return (this.#Width + this.#Height) * 2

//     }
//     valueOf() {
//         return this.area()
//     }
// }


// class Rectangle extends Shape {
//     static numOfRec = 0
//     constructor(width, height) {
//         super(width, height)
//         if (Rectangle.numOfRec >= 1  && this.constructor == Rectangle ) {
//             throw new Error("Only one object allowed ")
//         }
//         if (arguments.length !== 2) {
//             throw new Error("Please enter two parameters (width and height) and only numbers")
//         }
//         if (this.constructor == Rectangle) {
//             Rectangle.numOfRec++
//         }
//     }
//     toString() {
//         return `Rectangle width is ${this.width},height is ${this.height}, area is ${this.area()} and perimeter is ${this.perimeter()}`
//     }
//     static getNumOfRecs() {
//         return Rectangle.numOfRec
//     }
// }


// class Square extends Shape {
//     static numOfSquares = 0
//     constructor(length) {
//         super(length, length)
//         if (Square.numOfSquares>= 1  && this.constructor == Square ) {
//             throw new Error("Only one object allowed ")
//         }
//         if (arguments.length !== 1) {
//             throw new Error("Please enter one parameters (length) and only numbers")
//         }
//         if (this.constructor == Square) {
//             Square.numOfSquares++
//         }
//     }
//     toString() {
//         return `Square length is ${this.width},area is ${this.area()} and perimeter is ${this.perimeter()}`
//     }
//     static getNumOfSquares = function () {
//         return Square.numOfSquares
//     }
// }



class Polygon {
    constructor(sides) {
        if (this.constructor == Polygon) {
            throw 'abstract class'
        }
        this.Sides = sides
    }
    perimeter() {
        return this.Sides.reduce((total, side) => total + side, 0)
    }
}

class Rectangle extends Polygon {
    constructor(width, height) {
        if (typeof width !== 'number' || width <= 0 || typeof height !== 'number' || height <= 0 || arguments.length !== 2) {
            throw new Error('Width and height must be positive numbers.');
          }
        super([width, height, width, height])
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
    toString() {
        return `Rectangle width is ${this.width},height is ${this.height}, area is ${this.area()} and perimeter is ${this.perimeter()}`
    }
    draw(ctx) {
        ctx.fillRect(200, 0, this.width, this.height)
    }
}

class Square extends Rectangle {
    constructor(side) {
        if (typeof side !== 'number' || side <= 0 || arguments.length !== 1) {
            throw new Error('side length must be positive numbers.');
          }
        super(side, side)
        this.side = side
    }
    toString() {
        return `Square length is ${this.side},area is ${this.area()} and perimeter is ${this.perimeter()}`
    }
    draw(ctx) {
        ctx.fillRect(100, 100, this.side, this.side)
    }
}

class Circle extends Polygon {
    constructor(radius) {
        if (typeof radius !== 'number' || radius <= 0 || arguments.length !== 1) {
            throw new Error('radius must be positive numbers.');
          }
        super([2 * Math.PI * radius])
        this.radius = radius
    }

    area() {
        return Math.PI * this.radius ** 2
    }
    perimeter(){
        return 2*this.radius*Math.PI
    }
    toString() {
        return `Circle radius is ${this.radius}, area is ${(this.area()).toFixed(2)}, perimeter is ${(this.perimeter()).toFixed(2)}`;
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(250, 250, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }
}

class Triangle extends Polygon {
    constructor(sideA, sideB, sideC) {
        if (typeof sideA !== 'number' || sideA <= 0 || typeof sideB !== 'number' || sideB <= 0 || typeof sideC !== 'number' || sideC <= 0 || arguments.length !== 3) {
            throw new Error('All sides must be positive numbers.');
          }
        super([sideA, sideB, sideC])
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area() {
        const semiPer = this.perimeter() / 2
        return Math.sqrt(semiPer * (semiPer - this.sideA) * (semiPer - this.sideB) * (semiPer - this.sideC))
    }
    toString() {
        return `Triangle sides are ${this.sideA},${this.sideB},${this.sideC}, area is ${this.area()}, perimeter is ${this.perimeter()}`;
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(0, this.sideA);
        ctx.lineTo(this.sideB, this.sideC);
        ctx.lineTo(this.sideB, 0);
        ctx.fill()
    }
}

const rectangle = new Rectangle(100, 50);
const square = new Square(75);
const circle = new Circle(50);
const triangle = new Triangle(30, 40, 50);
console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(triangle.toString());
console.log(square);


const canvas = document.createElement('canvas')
canvas.width = 300
canvas.height = 300
document.body.appendChild(canvas)
canvas.style.border = '2px solid black'
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'red';
rectangle.draw(ctx);

ctx.fillStyle = 'blue';
square.draw(ctx);

ctx.fillStyle = 'green';
circle.draw(ctx);

ctx.fillStyle = 'orange';
triangle.draw(ctx);