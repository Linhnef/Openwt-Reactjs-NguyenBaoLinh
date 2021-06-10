function createNewStr(str){
    if(str.length%2 != 1) return false;
    let reg = str.substring(Math.floor(str.length/2)-1,Math.floor(str.length/2)+2);
    return reg;
}
console.log(createNewStr('sTWRe'));