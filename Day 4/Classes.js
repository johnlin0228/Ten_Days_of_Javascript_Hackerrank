/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Polygon {

    constructor(lengths) {
        this.lengths = lengths;
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
    perimeter() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        let polygonPerimeter = this.lengths.reduce((accumulator, currentValue) => accumulator + currentValue);
        return polygonPerimeter;
    }
}