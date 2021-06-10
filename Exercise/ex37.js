

function convert(str){
    if(str.length < 3) str.toUpperCase();
    tmp = str[0] + str[1] + str[2];
    let rs = str.replace(tmp,tmp.toString().toLowerCase());
    return rs;
}
console.log(convert('SesSDERS'));