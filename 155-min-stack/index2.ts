var MinStack2 = function() {
    this.stack = [];
};


MinStack2.prototype.push = function(val: number): void {
    if (this.stack.length === 0) {
        this.stack.push({ val: val, min: val });
    } else {
        var min = Math.min(this.stack[this.stack.length - 1].min, val);
        this.stack.push({ val: val, min: min });
    }
};

MinStack2.prototype.pop = function(): void {
    this.stack.pop();
};


MinStack2.prototype.top = function(): number {
    return this.stack[this.stack.length - 1].val;
};

MinStack2.prototype.getMin = function(): number {
    return this.stack[this.stack.length - 1].min;
};

// var obj2 = new MinStack2();
// obj2.push(1);
// obj2.push(-1);
// obj2.push(2);

// var obj2_param_3 = obj2.top();
// console.log(obj2_param_3);

// var obj2_param_4 = obj2.getMin();
// console.log(obj2_param_4);
