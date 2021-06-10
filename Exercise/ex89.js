function change(x,y,z){
    return (x+y == z || x-y == z || x*y == z || x/y == z) ? true : false;
}
console.log(change(1,2,3));