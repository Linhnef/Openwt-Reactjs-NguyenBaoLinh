let get_ = (arr,x) =>{
    return arr.filter(element => element%x==0);
}

console.log(get_([1, 2, 3, 4, 5, 6], 1));
console.log(get_([1, 2, 3, 4, 5, 6], 2));
console.log(get_([1, 2, 3, 4, 5, 6], 3));
console.log(get_([1, 2, 3, 4, 5, 6], 4));