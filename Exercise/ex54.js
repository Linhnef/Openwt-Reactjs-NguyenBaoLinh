function check(str){
    let tmp = str.split('');
    let dem = 0;
    tmp.forEach(element => {
        if(element =='a' || element == 'e' || element == 'i' || element =='o' || element == 'u') dem+=1;
    });
    return dem;
}
console.log(check('alloalo'));