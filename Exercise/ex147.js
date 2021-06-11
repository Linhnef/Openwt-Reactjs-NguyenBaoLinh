function sum(x){
    let tmp = x.split('');
    let sum = 0;
    for(i=0;i<tmp.length;i++){
        if(tmp[i] == tmp[i].toUpperCase()){
            sum += parseInt(tmp[i],10);
        }
    }
    return sum;
}
console.log(sum('abcd12efg9'));