function find(a){
    let rs = 0;
    for(i = 0; i<a.length;i++){
        if(a[i]%2==0 && a[i]>0) rs = a[i];
    }
    return rs;
}

console.log(find([20, 40, 200]));
console.log(find([20, 40, 200, 301]));