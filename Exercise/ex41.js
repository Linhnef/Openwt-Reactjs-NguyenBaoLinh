function check(a,b,c){
    if (a == b && a == c)  return 30;
    if (a == b || a == c || b == c) return 40;
    return 40;
}
console.log('resuilt is : ' + check(20,30,20));