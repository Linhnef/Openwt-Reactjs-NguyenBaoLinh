//5.
function reverse(str){
    let tmp = [];
    let rs = '';
    for(i = 0; i<str.length;i++){
        tmp[i] = str[i];
    }
    for(i = 0; i<str.length;i++){
        rs +=tmp.pop();
    }
    return rs;
}

console.log(reverse('sTRING'));