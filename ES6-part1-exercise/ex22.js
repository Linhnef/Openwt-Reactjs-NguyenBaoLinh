let filter_ = (x) =>{
    return x.filter(element => (x.indexOf(element) == x.lastIndexOf(element)));
}
console.log(filter_([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_([1, 2, 3, 4]));  