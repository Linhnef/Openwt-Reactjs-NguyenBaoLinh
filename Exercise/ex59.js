function get(str){
    if(str.length%2 != 0) return false;
    return str.substring(0,(str.length/2));
}
console.log(get('helseloo'))