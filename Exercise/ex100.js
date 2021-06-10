function check(a,b){
    for(i = 0;i<a.length;i++){
        for(j=0;j<b.length;j++){
            if(a[i]==b[j]) return true;
        }
    }
    return false;
}

console.log(check([1,2,3], [3,4,5]));   
console.log(check([1,2,3], [5,6,7])); 