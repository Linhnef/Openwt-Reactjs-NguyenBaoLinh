function divide(a,b){
    if(b==1) return a;
    return (a%b == 0) ? a/b : a;
}
console.log(divide(12,3));
console.log(divide(13,2));