function work(a){
    if(a%3 == 0){
        return a + ' chia het cho 3.';
    }
    if(a%7 == 0){
        return a + ' chia het cho 7.';
    }
    return false
}
console.log(work(7));