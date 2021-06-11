function sortArr(x){
    x.sort((a, b) => a.length - b.length);
    return x;
}

console.log(sortArr(["xyz","acd","aa","bb","zzz","", "a","b"]));

