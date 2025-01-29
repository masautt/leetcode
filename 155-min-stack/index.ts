/** 
 * @param {number} val
 * @return {void}
 */
class MinStack {
    private stack: { val: number; min: number }[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const min = this.stack.length === 0 ? val : Math.min(val, this.stack[this.stack.length - 1].min);
        this.stack.push({ val, min });
    }

    pop(): void {
        if (this.stack.length > 0) {
            this.stack.pop();
        }
    }

    top(): number {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1].val : -1;
    }

    getMin(): number {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1].min : -1;
    }
}


const obj = new MinStack();
obj.push(1);
obj.pop();
const param_3 = obj.top();
const param_4 = obj.getMin();