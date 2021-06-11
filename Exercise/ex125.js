function find(a){
    let max = 0;
    let rs;
    for(i=0;i<a.length;i++){
        if(a[i].split('').length > max){
            max = a[i].split('').length;
            rs = a[i];
        }
    }
    return rs;
}
console.log(find(["ab", "a", "abcd"]));
console.log(find(["ab", "ab", "ab"]));