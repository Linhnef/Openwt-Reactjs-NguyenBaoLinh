function check_case(character){
    if (character == character.toUpperCase()) {
    return true;
    }
    if (character == character.toLowerCase()){
    return false;
    }
}

function check(str){
    let arr = [];
    arr[0] = check_case(str[0]);
    for(i=1;i<str.length;i++){
        arr[i] = check_case(str[i]);
        if(arr[i] == true && arr[i-1]==true) return false;
    }
    return true;
}

console.log(check('xye'));
console.log(check('WWe'));