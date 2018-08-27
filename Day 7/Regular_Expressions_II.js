/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * ^  Matches beginning of input. 
 * ?  Matches the preceding expression 0 or 1 time. 
 * \s Matches a white space character, including space, tab, form feed, line feed.
 * +  Matches the preceding expression 1 or more times.
 * $  Matches end of input.
 */

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-z|A-Z]+$/);
    
    /*
     * Do not remove the return statement
     */
    return re;
}