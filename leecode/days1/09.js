// 用两个栈实现一个队列。队列的声明如下，
// 请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )

var CQueue = function() {
    this.stackA = [];   //入数组
    this.stackB = [];   //出数组
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stackB.length != 0){
        return this.stackB.pop();
    }else{
        while(this.stackA.length){
            this.stackB.push( this.stackA.pop() );
        }
        if(this.stackB.length != 0){
            return this.stackB.pop();
        }else{
            return -1;
        }
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
 var obj = new CQueue();
 var value = ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"];
 obj.appendTail(value)
 var param_2 = obj.deleteHead()
 console.log(param_2);