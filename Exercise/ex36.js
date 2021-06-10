function check(a,b,c){
    if(a%10 == b%10 && a%10 == c%10) return true;
    return false;
}

console.log('resuilt is : ' + check(10,20,30));