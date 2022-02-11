// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
// 请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，
// 该函数将返回左旋转两位得到的结果"cdefgab"。

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var s = "abcdefg";
var n = 2;

var reverseLeftWords = function(s, n) {
    let newStr = s.split("");
    newStr.length = newStr.length+n;
    for(let i=0, j=newStr.length - n; i < n; i++, j++){
        newStr[j] = s[i];
    }
    for(let i = 0;i<n;i++){
        newStr.shift();
    }
    // newStr.join('');
    return newStr.join('');
};

console.log(reverseLeftWords(s,2));