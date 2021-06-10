function check(x,y){
    if ((x < 0 && y > 0) || x > 0 && y < 0) return true;
    return false;
}
console.log('the resuilt is : ' + check(8,-9));