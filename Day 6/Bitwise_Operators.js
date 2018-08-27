/**
 *
 *
 * @param {*} n Set S is a sequence of distinct integers from 1 to n (i.e: S = {1, 2, ..., n}).
 * @param {*} k A given integer.
 * @returns the largest value of any a & b < k in S (where a < b).
 */

 
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

function getMaxLessThanK(n, k) {
    let maximumAB = 0;
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let aANDb = a & b;
            if (aANDb < k && aANDb > maximumAB) {
                maximumAB = aANDb;
            }
        }
    }
    return maximumAB;
}