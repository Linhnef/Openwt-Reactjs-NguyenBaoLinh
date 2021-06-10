
function check(str,reg){
    var tmp = [];
    let rs = '';
    for(i = 0; i<str.length;i++){
        tmp[i] = str[i];
    }
    rs += tmp[1] + tmp[2] + tmp[3];
    if(rs == reg){
        return true;
    }
    return false;
}

console.log(check('aloaloalo','loa'));
console.log(check('aloaloalo','loE'));