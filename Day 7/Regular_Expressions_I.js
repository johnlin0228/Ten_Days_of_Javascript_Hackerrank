function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    
    let re = new RegExp(/^([aeiou]).*\1$/);
    /*
     * Do not remove the return statement
     */
    return re;
}