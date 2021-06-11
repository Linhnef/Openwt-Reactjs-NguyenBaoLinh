function find(a,x){
    let dem = 0;
    let daruarion =  a.indexOf(x);
    for(i=0; i<daruarion;i++){
        if(a[i]%2==0) dem+=1;
    }
    return dem;
}

console.log(find([1,2,3,6,5],6));