function coppies(str){
    if (str.length<3) return false;
    let tmp = str[str.length-3] + str[str.length-2] + str[str.length-1];
    return tmp+tmp+tmp;
}
console.log(coppies('python'));