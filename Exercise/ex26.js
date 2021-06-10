let str = 'string';
if(str.length < 3) console.log('the string too short !');
let tmp =str[str.length-3] + str[str.length-2]  + str[str.length-1]
str = tmp + str + tmp;
console.log(str);

