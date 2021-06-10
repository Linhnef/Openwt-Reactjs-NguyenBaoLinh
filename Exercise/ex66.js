function display(str){
    let start = str.substring(0,3);
    return (start == 'Los' || start == 'New') ? str : '';
}
console.log(display('dser'));
console.log(display('Los Angles'));