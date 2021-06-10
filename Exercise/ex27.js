function check(str){
    let tmp = str[0] + str[1] +str[2] + str[3];
    if(tmp == 'Java' || tmp == 'JAVA' || tmp == 'java'){
        return true;
    }
    return false;
}
console.log(check('java is the important language programing.'));
