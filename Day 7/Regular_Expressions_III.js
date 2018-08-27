/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 * \  A backslash that precedes a non-special character 
 *    indicates that the next character is special and is not to be interpreted literally.
 *    A backslash that precedes a special character 
 *    indicates that the next character is not special and should be interpreted literally. 
 * +  Matches the preceding expression 1 or more times. 
 * \d Matches a digit character.
 * g  Perform a global match (find all matches rather than stopping after the first match)
 */

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = new RegExp('\\d+', 'g');

    /*
     * Do not remove the return statement
     */
    return re;
}