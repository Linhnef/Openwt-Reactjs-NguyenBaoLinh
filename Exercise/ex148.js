function swap(a,b){
    let tmp = a;
    a=b;
    b= tmp;
}
function change(x){

    if(x.length%2 != 0) return false;
    let rs = [];
    for(i=0;i<x.length/2;i++){
        rs[i] =  x[i+x.length/2];
        rs[i+x.length/2] = ex[i];
    }
    return rs;
}

console.log(change([1,2,3,4,5,6]))
console.log(change([1,2,3,4,5,6,7]))