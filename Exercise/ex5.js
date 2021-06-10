//5.
let str =  'w3resource';
var tmp = [];
let rs = '';
for(i = 0; i<str.length;i++){
    tmp[i] = str[i];
}
for(i = 0; i<str.length;i++){
    rs +=tmp.pop();
}
console.log(rs);
