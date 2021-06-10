function check(a,b){
    if(a<0 || b<0) return false;
    return (a%7 == 0 || a%11 == 0 || b%7 == 0 || b%11 == 0) ? true : false;
}

console.log(check(7,26));