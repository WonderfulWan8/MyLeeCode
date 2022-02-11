// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 
// appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )

// 示例 1：
// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

// 示例 2：
// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]
// 提示：
// 1 <= values <= 10000
// 最多会对 appendTail、deleteHead 进行 10000 次调用

var CQueue = function () {
    this.stackA = [];
    this.stackB = [];
};

CQueue.prototype.appendTail = function (value) {//给这个函数的原型添加一个方法
    // 尾入
    this.stackA.push(value);
}
CQueue.prototype.deleteHead = function () {
    // 头出
    // 判断是否为空，空的话
    if(this.stackB.length){//B栈不为空
        return this.stackB.pop();//则弹出B栈尾部数据
    }else{
        while (this.stackA.length) {
            this.stackB.push(this.stackA.pop());//A栈尾出，B栈尾入
        }
        if(!this.stackB.length){//AB都为空的情况
            return -1;
        }else{
            return this.stackB.pop();//弹出被A赋值完毕的B的尾部
        }
    }
}
CQueue.prototype.appendTail();
CQueue.prototype.appendTail(3);
CQueue.prototype.appendTail();
CQueue.prototype.appendTail();
console.log(CQueue);

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */