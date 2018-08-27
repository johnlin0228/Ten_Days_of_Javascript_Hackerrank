/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    let sortedArray = nums.sort(function (a, b) {
        return b - a;
    });
    let afterFilterArray = sortedArray.filter(function (elm, index, self) {
        return index === self.indexOf(elm);
    });
    return afterFilterArray[1];
}