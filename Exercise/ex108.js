function vector(v1,v2){
    let v = [];
    for(i = 0; i<3;i++){
        v[i] = v1[i] * v2[i];
    }

    let sum = 0;
    v.forEach(element => {
        sum+=element;
    });
    return sum;
}
console.log(vector([1,2,3], [1,2,3]));