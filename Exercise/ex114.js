function check(str) {
    var f = str[0];
    var e = str[str.length - 1];
    if(f == f.toUpperCase(0) && e =='.') return true;
    return false;
}
console.log(check('This tool will help you write better English and efficiently corrects texts.'));
console.log(check('This tool will help you write better English and efficiently corrects texts'));