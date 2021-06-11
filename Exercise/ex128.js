function round(x){
    while (x % 10) {
        x++;
    }
    return x;
}

console.log(round(56));
console.log(round(592));