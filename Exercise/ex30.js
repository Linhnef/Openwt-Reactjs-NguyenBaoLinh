function check(str){
    if (str.length < 6) {
        return str;
      }
    var tmp = [];
    let rs = '';
    let check = '';
    for(i = 0; i<str.length;i++){
        tmp[i] = str[i];
    }
    for(i = 4; i<10 ; i++){
        check += tmp[i];
    }
    if(check == 'Script'){
        tmp.splice(4,6);
    }
    for(i = 0; i<tmp.length;i++){
        rs += tmp[i]
    }
    return rs;

}

console.log(check('JavaScript'));
console.log(check('CoffeeScript'));