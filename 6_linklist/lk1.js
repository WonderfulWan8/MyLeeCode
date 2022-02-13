// 单向链表构造函数
function LinkedList(){
   var Node = function(element){
    this.element = element;
    this.next = null;//下个节点的地址
   }
   var length = 0;//单向链表的长度
   var head = null;//单向链表的头结点，初始化为NULL
}

/**
 * 向单向链表尾部添加元素
 * @param  {Any} element 要加入链表的节点
 */
this.append = function(element){
    let node = new Node(element);
    let current;
    if(head === Null){
        head = node;
    } else {
        current = head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
};

// 向单链表中某个位置插入元素
this.insert = function(position,element){
    if(position >= 0 && position <= length){
        let node = new node(element);
        let current = head;
        let index = 0;
        
        if( position === 0 ){
            node.next = current;
            head = node;
        } else {
            while(index < position){
                // previous = 
            }
        }
    }

    
}