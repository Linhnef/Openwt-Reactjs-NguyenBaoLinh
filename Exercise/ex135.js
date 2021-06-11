function del(str){
    let x = str.split('');
    let rs = [];
    for(i=0; i<x.length;i++){
        let tmp = x[i];
        x[i] = '';
        if(x.indexOf(tmp) == -1) rs.push(tmp);
        x[i] = tmp;
    }
    return rs.join('');
}
console.log(del("abcdabc"));
console.log(del("python"));
console.log(del("abcabc"));
console.log(del("1365451"));