function check(str){
    let arr = str.split('');
    let p = 0;
    let t = 0;
    arr.forEach(element => {
        if(element == 'p') p+=1;
        if(element == 't') t+=1;
    });
    return (p == t) ? true : false;
    return false;
}

console.log(check('sepptttt'));