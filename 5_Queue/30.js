// 剑指 Offer 30. 包含min函数的栈
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中
// 调用 min、push 及 pop 的时间复杂度都是 O(1)。

// 示例:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min(); --> 返回 - 3.
// minStack.pop();
// minStack.top(); --> 返回 0.
// minStack.min(); --> 返回 - 2.

// 提示：
// 各函数的调用总次数不超过 20000 次
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.MinStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    // 始终将最小的数插在栈顶
    this.MinStack.push(this.MinStack[ this.MinStack.length-1 ] < x ? this.MinStack[this.MinStack.length-1] : x );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // 同时删除两个栈顶的元素
    this.stack.pop();
    this.MinStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    // stack的元素是实际栈顶元素，minstack是最小的那个
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.MinStack[ this.MinStack.length - 1 ];
};

