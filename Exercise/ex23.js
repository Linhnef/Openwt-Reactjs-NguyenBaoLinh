function swap(a,b){
    var tmp = a;
    a=b;
    b=tmp;
}

let str =  'w3resource';
function work(str){
    let tmp = [];
    let rs = '';
    for(i = 0; i<str.length;i++){
        tmp[i] = str[i];
    }
    console.log(tmp);
    let t = tmp[0];
    tmp[0] = tmp[tmp.length-1];
    tmp[tmp.length-1] = t;
    for(i = 0; i<str.length;i++){
        rs +=tmp[i];
    }
    return rs;
}
console.log(work(str));
