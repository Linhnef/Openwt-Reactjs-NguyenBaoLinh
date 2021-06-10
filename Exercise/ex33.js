function check(a,b){
    str ='out !';
    if(a<60 && a > 40) str += 'a in 40..60. \n';
    if(a<100 && a > 70) str += 'a in 70..100. \n';
    if(b<60 && b > 40) str += 'b in 40..60. \n';
    if(b<100 && b > 70) str += 'b in 70..100. \n';
    return str;
}
console.log(check(65,37));