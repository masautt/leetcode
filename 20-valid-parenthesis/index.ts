function isValid(s: string): boolean {
    let expectedBrackets : string[] = [];

    for (let letter = 0; letter < s.length; letter++) {
        if (s[letter] == '{') {
            expectedBrackets.push('}');
        } else if (s[letter] == '[') {
            expectedBrackets.push(']');
        } else if (s[letter] == '(') {
            expectedBrackets.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (expectedBrackets.pop() !== s[letter]) {
            return false;
        }
    }

    // Return based on whether or not anything remains
    // (indicates that there were incorrect brackets)
    return !expectedBrackets.length;
};

console.log(isValid("({}))"));

