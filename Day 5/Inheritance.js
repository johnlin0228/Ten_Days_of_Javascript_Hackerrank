/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Rectangle.prototype.area = function () {
    return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
class Square extends Rectangle {
    constructor(length) {
        super(length);
        this.w = length;
        this.h = length;
    }
}