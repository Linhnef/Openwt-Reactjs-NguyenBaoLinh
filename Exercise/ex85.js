function cal(a){
    let tmp = [];
    tmp[0] = 0;
    tmp[1] = 0;
    a.forEach(element => {
        if(element%2 == 0) tmp[0] += element;
        if(element%2 !=0 )tmp[1] += element;
    });
    return tmp;
}
console.log(cal([1,2,3])); 