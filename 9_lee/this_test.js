// var name = 'window'

// var person1 = {
//   name: 'person1',
//   show1: function () {
//     console.log(this.name)
//   },
//   show2: () => console.log(this.name),
//   show3: function () {
//     return function () {
//       console.log(this.name)
//     }
//   },
//   show4: function () {
//     return () => console.log(this.name)
//   }
// }
// var person2 = { name: 'person2' }

// person1.show1() //person1
// person1.show1.call(person2) //person2

// person1.show2()//undefined
// person1.show2.call(person2)//undefined

// person1.show3()()
// person1.show3().call(person2)
// person1.show3.call(person2)()

// person1.show4()()
// person1.show4().call(person2)
// person1.show4.call(person2)()

//1、 当函数作为对象的方法被调用时，this指向该对象
var obj = {
    a: 'yuguang',
    getName: function(){
        console.log(this === obj);
        console.log(this.a);
    }
}
obj.getName();// true  yuguang

// 2、作为普通函数调用
window.name = 'yuguang'
var getName = function () {
    let name = 'zhangsang';
    console.log(this.name);
}
getName();