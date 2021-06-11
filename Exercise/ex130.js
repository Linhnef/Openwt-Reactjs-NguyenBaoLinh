function find(x){
    let dem = 0;
    while(x/10 != 0){
        let tmp = x%10;
        x = Math.floor(x/10);
        if(tmp%2 == 0) dem = dem +1;
    }
    return dem;
}
console.log(find(123));
console.log(find(1020));
console.log(find(102));