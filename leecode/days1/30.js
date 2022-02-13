// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 
// min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

 /**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.minStack.push( Math.min(this.minStack[ this.minStack.length-1 ],x) );//始终将最小值放在栈顶
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack.pop();
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */