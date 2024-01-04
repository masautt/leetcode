/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    // Remove all whitespace
    s = s.replace(/[^a-zA-Z0-9]+/g, "");
    s = s.toLowerCase();

    var j = s.length - 1;
    for (var i = 0; i < s.length;){
        if (s[i] !== s[j])
            return false;
        j--;
    }
    return true;
};









/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    // Remove all whitespace
    s = s.replace(/[^a-zA-Z0-9]+/g, "");
    s = s.toLowerCase();

    for (var i = 0, j = s.length - 1; i < s.length; i++, j--){
        if (s[i] !== s[j])
            return false;
    }
    return true;
};