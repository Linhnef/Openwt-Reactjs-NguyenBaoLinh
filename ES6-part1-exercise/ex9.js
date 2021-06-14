/* const powerset = arr => {
    let rs = [];
    for(i=0;i<arr.length;i++){
        rs.push(arr[i]);
        let tmp = [];
        for(j=i+1;j<arr.length;j++){
            tmp.push(arr[i]);
            tmp.push(arr[j]);
        }
        rs.push(tmp);
    }
    return rs;
} */

const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));