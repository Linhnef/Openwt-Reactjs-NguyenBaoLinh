function check(a){
    let flag1 = false;
    let flag3 = false;
    a.forEach(element => {
        if(element == 1) flag1 = true;
        if(element == 3) flag3 = true;
    });
    if(flag1 == false && flag3 == false) return 'doesnt had 1 and 3.';
    if(flag3 == false) return 'doesnt had 3.';
    if(flag1 == false) return 'doesnt had 1.';
    return false;
}
console.log(check([1,2,6,5,8]));
