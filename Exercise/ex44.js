function compare(a,b,c){
    if(a<b || a<c) return true;
    return false;
}
function check(a,b,c){
    if(a>= 20 && compare(a,b,c)==true) return true;
    if(b>= 20 && compare(b,a,c)==true) return true;
    if(c>= 20 && compare(c,b,a)==true) return true;
    return false;
}

console.log(check(12,14,12));