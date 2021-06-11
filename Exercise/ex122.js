function check(a){
    for(i=0;i<a.length-1;i++){
        if(a[i]>=a[i+1]) return false;
    }
    return true;
}
console.log(check([1, 2, 3]));
console.log(check([1, 2, 2]))
console.log(check([-3, -2, -1]))