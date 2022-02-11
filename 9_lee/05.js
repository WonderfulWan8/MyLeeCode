

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} 
 * @return {string}
 */
var s =  "We are happy.";
console.log(s.length);
console.log(s.indexOf(' '));
var replaceSpace = function(s) {
    // for(let i = 0; i < s.length; i++)
    //     if(s.indexOf(' ')){
    //         console.log(s.indexOf(' '));
    //         s.replace(' ','%20');
    //     }
    
    // let ss = s;
    // let newStr = '' ;
    // for( let i=0; i < s.length; i++ ){
    //     if(ss[i] === ' '){
    //         newStr += '20%';
    //         continue;
    //     }
    //     newStr += ss[i];
    // }
    // return newStr;

    // let p = s;
    // let re='';
    // for(let i = 0;i<s.length;i++){
    //     if(p[i] === ' '){
    //         re = re + '%20';
    //         continue;
    //     }
    //     re = re + p[i];
    // }
    // return re;

    // return s;
    // return s.replaceAll("\ ","%20")

    let str = s.split("");
    let spaceCount = 0;
    let oldLen = s.length;

    for(let i=0; i < oldLen; i++){
        if(str[i] === ' '){
            spaceCount++;
        }
    }
    str.length += spaceCount * 2;
    for(let i = oldLen - 1,j = str.length-1; i>=0; i--,j--){
        if(str[i] !== ' '){
            str[j] = str[i];
        } else {
            str[j-2] = '%';
            str[j-1] = '2';
            str[j] = '0';
            j-=2;
        }
    }
    return str.join('');

    // s = s.split("");
    // let oldLen = s.length;
    // let spaceCount = 0;
    // for (let i = 0; i < oldLen; i++) {
    //     if (s[i] === ' ') spaceCount++;
    // }
    // s.length += spaceCount * 2;
    // for (let i = oldLen - 1, j = s.length - 1; i >= 0; i--, j--) {
    //     if (s[i] !== ' ') s[j] = s[i];
    //     else {
    //         s[j - 2] = '%';
    //         s[j - 1] = '2';
    //         s[j] = '0';
    //         j -= 2;
    //     }
    // }
    // return s.join('');

};

console.log(replaceSpace(s));