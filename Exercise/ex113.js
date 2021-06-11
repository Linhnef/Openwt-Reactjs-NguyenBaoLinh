function find(x){
    let sum = x;
    while(x>0){
        sum += Math.floor(x/2);
        x=Math.floor(x/2);
    }
    return sum;
}
console.log(find(8));
console.log(find(9));