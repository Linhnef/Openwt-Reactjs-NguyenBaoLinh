function check(p, t){
    if(t == 'last'){
        if(p>=90) return true;
    }
    if(p>=89) return true;
    return false;
}
console.log('resuilt is : ' + check(91));
    