// leetcode's solution

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s: string): boolean {

    // Remove all whitespace
    s = s.replace(/[^a-zA-Z0-9]+/g, "");
    s = s.toLowerCase();

    var j = s.length - 1;
    for (var i = 0; i < s.length; i++){
        if (s[i] !== s[j])
            return false;
        j--;
    }
    return true;
};