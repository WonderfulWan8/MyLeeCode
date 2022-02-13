// import {defaultEquals} from './defaultEquals.js';
// import { Node } from './models/linked-list-models'; 

function defaultEquals( a,b ){
    return a===b;
}
class Node{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}
class LinkedList{
    constructor (equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    // 像链表尾部添加元素
    push(element){
        const node = new Node(element);
        let current;
        if(this.head === null){
            this.head = node;
        }else{
            this.current = this.head;
            while( current.next != null  ){//寻找表尾
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    // 从链表中移除元素
    removeAt(index){
        if( index >=0 && index < this.count ){
            let current = this.head;
        } else {
            let sub = 0;
            let current = this.head;
            let node1;
            while(sub < index){
                current = current.next;
                sub++;
            }
            node1 = this.current;
            delete this.current;
        }
        return node1;
    }

}

