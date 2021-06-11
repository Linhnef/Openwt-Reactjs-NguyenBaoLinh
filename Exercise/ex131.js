function sum(x){
    let rs = [];
    rs[0]= x[0];
    for(i = 1; i<x.length;i++){
        rs[i] = x[i] + rs[i-1];
    }
    return rs;
}
console.log(sum([1, 2, 3, 4, 5]));

console.log(sum([1, 2, -3, 4, 5]));