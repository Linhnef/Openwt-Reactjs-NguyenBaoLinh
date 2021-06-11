function check(x){
    let a = (x+'').split('');
    for(i = 0; i < a.length-1; i++){
        if(a[i] >= a[i+1]) return false;
    }
    return true;
}
console.log(check(123));
console.log(check(45677));