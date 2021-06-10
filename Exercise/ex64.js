function createNewStr(str1,str2){
    let rs = '';
    if(str1.length > str2.length){
        rs = str1.substring(str1.length-str2.length,str1.length) + str2;
    }else if(str1.length < str2.length){
        rs = str1 + str2.substring(str2.length-str1.length,str2.length);
    }
    return rs;
}
console.log(createNewStr('heolo','lo'));