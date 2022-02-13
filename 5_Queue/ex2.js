// let movie = 'Lord of the Rings';
// // var movie = 'Batman v Superman';

// function starWarsFan() {
//     const movie = 'Star Wars'; 
//     return movie;
// }
// function marvelFan() {
//     movie = 'The Avengers';
//     return movie;
// }

// function blizzardFan() {
//     const isFan = true;
//     let phrase = 'Warcraft';
//     console.log('Before if: ' + phrase);
//     if(isFan){
//         let phrase = 'initial text';
//         phrase = 'For the Horde!';
//         console.log('Inside if: ' + phrase);
//     }
//     phrase = 'For the Alliance!';
//     console.log('After if: ' + phrase);
// }

// console.log(movie);
// console.log(starWarsFan());
// console.log(marvelFan());
// console.log(movie);
// blizzardFan();

// const book = {
//     name: '学习 JavaScript 数据结构与算法' ,
// }
// console.log('你正在阅读' + book.name+'\n这是一行新字符粗\n这也是');

// const book2 = {
//     name: '学习 JavaScript 数据结构与算法',
// }
// console.log(`你正在阅读${book2.name}
// 这是一行新字符2
// 这也是2`);

// var circleAreaES5 = function circleArea(r) {
//     var PI = 3.14;
//     var area = PI * r * r;
//     return area;
// }
// console.log(circleAreaES5(2));

// const circleArea = (r)=>{
//     var PI = 3.14;
//     var area = PI * r * r;
//     return area;
// }
// console.log(circleArea(3));

// const circleArea3 = (r)=>  3.14 * r * r;
// console.log(circleArea(5));

// const hello = () => console.log(hello);
// hello();

// function  sum(x=1,y=2,z=3) {
//     return x+y+z
// }
// console.log(sum(4,2));

// let params = [3,4,5];
// console.log(sum(...params));
// // console.log(sum(apply(params)));
// console.log(sum.apply(undefined, params));

// function restParamaterFunction(params) {
    
// }

// function restParamaterFunction(x, y, ...a) {
//     return( (x+y) * a.length );
// }

// console.log(restParamaterFunction(1,2,[3,3,3]));
// console.log(restParamaterFunction(1,2,'hello',true,7));

// let [x, y] = ['a','b'];

// var x = 'a';
// var y = 'b';
// var obj2 = {x:x,y:y};
// console.log(obj2);

// let [x,y] = ['a','b'];
// let obj = {x,y};
// console.log(obj);

// var hello = {
//     name:'abcdef',
//     printHello:function printHello() {
//         console.log('Hello');
//     }
// }
// // console.log(hello.printHello());
// hello.printHello();

// var hello = {
//     name:'abcdef',
//     printHello(){
//         console.log('hello');
//     }
// }
// hello.printHello();

function Book(title,pages,isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

Book.prototype.printTitle = function (params) {
    console.log(this.title);   
}

const book1 = new Book('zjamhsaj',20,true);
book1.printTitle();

class Book2{
    constructor(title,pages,isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsBn(){
        console.log(this.isbn);
    }
}
const book3 = new Book2('3',3,true);
book3.printIsBn();

class ITBook extends Book2{
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTechnology(){
        console.log(this.technology);
    }
}
let jsBook = new ITBook('名称', 23, true, 'js');
jsBook.printTechnology();