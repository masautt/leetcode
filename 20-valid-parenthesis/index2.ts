function isValid2(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  
    const stack : string[] = [];
    const map = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}'],
    ]);
  
    for (let i = 0; i < s.length; i += 1) {
      if (map.has(s[i])) {
        let value = map.get(s[i]);
        if (value) stack.push(value);

      } else if (s[i] !== stack.pop()) {
        return false;
      }
    }
  
    return stack.length === 0;
  };