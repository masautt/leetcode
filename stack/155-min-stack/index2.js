
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        this.stack.push({ val : val, min : val});
    }
    else {
        var min = Math.min(this.stack[this.stack.length -1].min, val)
        this.stack.push({ val : val, min : min})
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};

var obj = new MinStack()
obj.push(1)
obj.push(-1)
obj.push(2);
var param_3 = obj.top()
console.log(param_3);
var param_4 = obj.getMin()
console.log(param_4);
