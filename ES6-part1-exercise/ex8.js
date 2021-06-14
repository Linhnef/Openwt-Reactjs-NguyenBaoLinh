let get_ = (arr, ...arg) =>{
    let rs = arr;
    for(i=0;i<arg.length;i++){
        rs = rs.filter(ele => ele != arg[i]);
    };
    return rs;
}
let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(get_(arra1, 'a', 'c'));
let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(get_(arra2, 'b'));
