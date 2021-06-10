function check(a){
    if(a.length<1) return false
    let f = a[0];
    let e = a[a.length-1];
    if(f==1) return 'first';
    if(e==1) return 'end';
    return false;
}
console.log(check([1,2,3]));
console.log(check([6,2,3]));
console.log(check([7,2,1]));