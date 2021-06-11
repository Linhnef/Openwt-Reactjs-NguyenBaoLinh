function find(x){
    for(i=0;i<x.length;i++){
        if(x[i]%10==0){
            return i;
        }
    }
    return 0;
}
console.log(find([1, 22, 30, 54, 56]));
console.log(find([1, 22, 32, 54, 56]));
console.log(find([1, 22, 32, 54, 50]));