// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
    constructor(height, width) {
        this.height_of_shape = height;
        this.width_of_shape = width;
    }

    getArea() {
        return this.height_of_shape * this.width_of_shape;
    }

}
class Rectangle extends Shape {

    area() {
        console.log(`The area of Reactangle is ${this.getArea()}`);
    }
}

class Triangle extends Shape {

    area() {
        console.log(`The area of traingle is ${this.getArea() / 2}`);
    }
}

let shape = new Rectangle('20', '20');
shape.area();
let shape2 = new Triangle('20', '20');
shape2.area();

/*output= The area of Reactangle is 400
The area of traingle is 200
*/
