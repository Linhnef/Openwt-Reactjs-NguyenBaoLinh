function find(a){
    let rs = 0;
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if(a[i]%a[j] == 0 || a[j] % a[i] === 0)
            rs+=1;
        }
    }
    return rs;
}

console.log(find([1,2,3]));