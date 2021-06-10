function check(str){
    let f = str[0];
    let e = str[str.length-1];
    return (f == 'P' || e == 'P') ? str.substring(1,str.length-1) : str;
}
console.log(check('Promotion'));
console.log(check('aloalo'));