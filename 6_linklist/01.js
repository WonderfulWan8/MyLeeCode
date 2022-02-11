
function defaultEquals(a, b){
    return a===b;
}

class Node{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}

class LinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    // 尾部添加元素
    push(element){
        let node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null){//找到最后一个结点
                current = current.next;
            }
            current.next = node;//插在链表尾部
        }
        this.count++;//链表长度++
    }
    // 指定位置插入元素
    insert(element,position){
        let node = new Node(element);
        if(this.head == null){
            this.head = node;
        } else {
            let sub = 0;
            let current = this.head;
            while( sub < position ){
                current = current.next;
                sub++;
            }
            node.next = current.next;
            current.next = node;
        }
        this.count++;
    }
    removeAt(index){
        // 检查越界
        if( index >= 0 && index < this.count ){
            let current = this.head;
            if(index == 0){
                this.head = this.head.next;
            } else {
                let previous;
                for( let i=0; i < index;i++ ){
                    previous = current;
                    current = current.next;
                }//出循环时，current为需要删除的结点
                previous.next  = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    // 获取制定位置结点
    getElementAt(index){
        // 检查越界
        if( index >= 0 && index < this.count ){
            if(inde == 0){
                return this.head;
            } else {
                let current = head;
                for( let i = 0; i < index; i++ ){
                    
                }
            }
        } 
        return undefined;
    }
}
