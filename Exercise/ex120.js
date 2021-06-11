function check(x,y,r,a,b){
    //(x,y) is circle center (a,b) point , r is radius.
    return (Math.sqrt((a-x)*(a-x) +(b-x)*(b-x)) == r) ? true : false;
}
console.log(check(0, 0, 2, 4, 6));
console.log(check(0, 0, 6, 8, 6));