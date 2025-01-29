/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var sObj = new Map();
    var tObj = new Map();

    for(var i = 0; i < s.length; i++) {
        if (!sObj.get(s[i])) {
            sObj.set(s[i], 1);
        }
        else {
            
        }
    }
};