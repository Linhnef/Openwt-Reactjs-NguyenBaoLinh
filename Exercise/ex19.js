function check(x){
    let tmp = (Math.abs(100 - x));
    let tmp2 = (Math.abs(400 - x));
    if(tmp <= 20 || tmp2 <= 20){
        return true;
    }
    return false;
}
console.log('The resuilt is : ' + check(130));