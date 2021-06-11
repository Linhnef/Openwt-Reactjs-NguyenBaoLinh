function sum(a){
    let rs = 0;
    while(a != 0){
        rs += a % 10;
        a = Math.floor(a / 10);
    }
    return rs;
}

function find(a){
    let dem = 0;
    while(a >=10){
        dem +=1;
        a = sum(a);
        
    }
    return dem;
}

console.log(find(359));