
function buildPalindrome(st) {
    var i = 0;
    var aux;
    while(st != st.split('').reverse().join('')){
        aux = st.split('')
        aux.splice(st.length-i, 0 ,st[i])
        console.log(aux);
        st = aux.join('');
        i++;
    }
    return st;
}
console.log(buildPalindrome('abcda'));
console.log(buildPalindrome('sades'));