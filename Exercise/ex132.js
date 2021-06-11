function isPrime(number) {
    if(number == 1 || number == 0) return false;
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return true;
}

function find(x){
    let arr = [];
    for(i=0;i<=x;i++){
        if(isPrime(i)==true) arr.push(i);
    }
    let rs = [];
    arr.forEach(element => {
        if(x%element==0) rs.push(element);
    });
    return rs;
}

console.log(find(100));
console.log(find(101));
console.log(find(103));
console.log(find(104));
console.log(find(105));