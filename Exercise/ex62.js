function move(str){
    if(str.length<3) return false;
    let mov = str.substring(str.length-3,str.length);
    return mov + str.substring(0,str.length-3);
}
console.log(move('binh thuong thoi'));
