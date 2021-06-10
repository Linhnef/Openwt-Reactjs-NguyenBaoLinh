function change(str) {
var s = [];
for(i = 0; i<str.length;i++){
    s[i] = str[i];
}
for (var i = 0; i < s.length; i++) {
    switch(s[i]) {
    case ' ':
    break;
    case 'z':
    s[i] = 'a';
    break;
    case 'Z': 
    s[i] = 'A';
    break;
    default:
    s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
}

// Upper-case vowels
switch(s[i]) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
    s[i] = s[i].toUpperCase();
    }
}
return s.join('');
}
console.log(change('python'));