// 输入一个链表的头节点，从尾到头反过来返回每个节点的值
// （用数组返回）。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// var node1 = new ListNode(1);
// var node2 = new ListNode(3);
// var node3 = new ListNode(2);
// node1.next = node2;
// node2.next = node3;
// node3.next = null;
// var head =  new ListNode(1);
// head.next = node1;
// console.log(head.next);

/**
 * @param {ListNode} head
 * @return {number[]}
 */
// var list = 
 var reversePrint = function(head) {
    let newList = [];
    if(head == null){
        return [];
    }
    while(head){
        newList.push(head.val);
        head = head.next;
    }
    return newList.reverse();
    // let newList = [];
    // let sub = 0;
    // let current = head.next;// 当前节点
    // if(current == null){
    //     return undefined;
    // }
    // while(current.next != null){
    //     console.log(newList.length);
    //     newList[sub++] = current.val;
    //     current = current.next;
    // }


    // if(newList.length == 0){
    //     return undefined;
    // }else{  
    //     return newList;
    // }

};

// console.log(reversePrint(head));