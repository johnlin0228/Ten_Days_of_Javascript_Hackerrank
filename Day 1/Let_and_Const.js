/* Declare a constant variable, PI, and assign it the value Math.PI. 
 *
 * Read a number, r, denoting the radius of a circle from stdin.
 * 
 * Use PI and r to calculate the area and perimeter of a circle having radius r.
 * 
 * Print area as the first line of output and print perimeter as the second line of output.
 */

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let r = readLine();
    // Print the area of the circle:
    let area = PI * r * r;
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter);
}