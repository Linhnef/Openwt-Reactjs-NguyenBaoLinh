function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return true;
}

function find(num){
    
    for (var i = num + 1;; i++){
        if(isPrime(i)==true) return i;
    }
}
console.log(find(3));
console.log(find(17));