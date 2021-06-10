function check(str){
    if(str.length < 6) return false;
    return (str.substring(str.length-6,str.length) == 'Script') ? true : false;
}
console.log(check('sasScript'));
console.log(check('sesdsesdsf'));