class Set{
    // add(element)：向集合添加一个新元素。
    // delete(element)：从集合移除一个元素。
    // has(element)：如果元素在集合中，返回 true，否则返回 false。
    // clear()：移除集合中的所有元素。
    // size()：返回集合所包含元素的数量。它与数组的 length 属性类似。
    // values()：返回一个包含集合中所有值（元素）的数组。
    constructor(){
        this.items = {};
    }
    has(element){
        return element in this.items;
    }
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element){
        if(this.has(element)){
            // this.items.delete(element);
            delete this.items[element];
        }
        return false;
    }
    clear(){
        this.items = {};
    }
    size(){
        return Object.keys(this.items).length;
    }
    value(){
        let values = [];
        
    }
}

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.clear();
console.log(set1);