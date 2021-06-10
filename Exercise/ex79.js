function check(a){
    if(a.length>3) return false;
    let flag30 = 0;
    let flag40 = 0;
    a.forEach(element => {
        if(element == 30) flag30+=1;
        if(element == 40) flag40+=1;
    });
    return (flag30 == 2 || flag40 == 2)  ? true : false;
}
console.log(check([0,30,30]));
console.log(check([0,40,40]));
console.log(check([0,30,40]));