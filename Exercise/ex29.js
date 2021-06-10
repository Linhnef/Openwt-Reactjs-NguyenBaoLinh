function check(a,b,c){
    if(a<99 && a>50 || b<99 && b>50 || c<99 && c>50){
        return true;
    }
    return false;
}
console.log('resuilt is : ' + check(20,30,55));