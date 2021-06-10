function createNewNum(a,b){
    if(a<100 && a>1000 || b<100 && b>1000) return false;
    let n1 = (a%10 + b%10)%10;
    let n2 = (Math.floor(a/10)%10 + Math.floor(b/10)%10)%10;
    let n3 = (Math.floor(a/100)%10 + Math.floor(b/100)%10)%10;
    return n3*100 + n2*10 + n1;
}
console.log(createNewNum(357,297));