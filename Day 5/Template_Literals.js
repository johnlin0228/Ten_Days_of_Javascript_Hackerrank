/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
    let s1 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    let s2 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    let arr = [s1, s2];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return arr.sort((a, b) => a - b);
}