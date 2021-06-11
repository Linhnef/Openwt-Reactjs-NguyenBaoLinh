function check(a,b){
    for(i = 0 ; i<b;i++){
        if (a.indexOf(i + 1) == -1) 
        return false;
    }
    return true;
}
console.log(check([1, 2, 3, 4, 5], 5));
console.log(check([1, 2, 3, 5], 5));