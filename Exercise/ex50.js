function upperCase(str){
    let tmp = str.split(' ');
    let rs = [];
    for(i = 0; i<tmp.length;i++){
        let t = tmp[i].split('');
        t[0] = t[0].toLocaleUpperCase();
        let s = t.join('');
        rs[i] = s
    }

    return rs.join(' ');
}
console.log(upperCase('chao moi nguoi nhaaa'));