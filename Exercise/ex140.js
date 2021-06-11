function check(num){
    let x = (num+'').split('');
    let tmp = x[0];
    for(i=0;i<x.length;i++){
        if(x[i] != tmp) return false;
    }
    return true;
}

console.log(check(1234));
console.log(check(1111));
console.log(check(22222222));