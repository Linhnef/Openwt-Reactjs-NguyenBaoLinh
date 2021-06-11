function convert(a,b){
    let array =[];
    array[true] = false;
    array[false] = true;
    return (array[a]&&array[b]);
}
console.log(convert(true, false));
console.log(convert(false, false));
console.log(convert(true, true));