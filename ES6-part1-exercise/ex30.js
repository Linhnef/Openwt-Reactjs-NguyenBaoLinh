let get_ = (arr, ...arg) =>{
    let rs = arr;
    for(i=0;i<arg.length;i++){
        rs = rs.filter(ele => ele != arg[i]);
    };
    return rs;
}
console.log(get_([2, 1, 2, 3], 1, 2));
console.log(get_([2, 1, 2, 3], 3));