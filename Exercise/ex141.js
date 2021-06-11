function check(a,b){
    let rs = 0;
    for(i=0;i<a.length;i++){
        for(j=0;j<b.length;j++){
            if(a[i] == b[j]) rs+=1;
        }
    }
    return rs;
}

console.log(check([1,2,3,4], [1,2,3,4]));
console.log(check([1,2,3,4], [1,2,3,5]));
console.log(check([1,2,3,4], [11,22,33,44]));