// 在字符串 s 中找出第一个只出现一次的字符。如果没有，
// 返回一个单空格。 s 只包含小写字母。

// 示例 1:

// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:

// 输入：s = "" 
// 输出：' '
/**
 * @param {string} s
 * @return {character}
 */

 let s = "abaccdeff";
 let s1 = "";
 let s2 = "cc";

var firstUniqChar = function(s) {
    // let myMap = new Map();
    // for(let i = 0; i < s.length; i++){
    //     if(myMap.has(s[i])){
    //         console.log(s[i])
    //         console.log("-----")
    //         return s[i];
    //     }
    //     myMap.set(s[i],1);
    // }

    
    
        for( let i = 0; i < s.length; i++ ){
            e = s.indexOf(s[i]);
            w = s.indexOf(s[i],e+1);//从第一次出现的后一位开始继续查询
            if( w == -1 ){
                return s[i];
            }
        }
        return " ";


    // for(let i=0;i<s.length;i++) {
    //     k = s.indexOf(s[i]);
    //     e = s.indexOf(s[i],k+1);
    //     if(e == -1) return s[i];
    // }
    // return " ";



};

console.log(firstUniqChar(s));
console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));