function change(num){
    let x = (''+num).split('');
    if(x.length%2 != 0) return false;
    let rs = [];
    for(i=0;i<x.length;i++){
        if(i>=1 && i%2 == 1){
           rs[i] = x[i-1];
           rs[i-1] = x[i];
        }
    }
    return rs.join('');
}

console.log(change(15));
console.log(change(1234));
console.log(change(123456));
console.log(change(12345));