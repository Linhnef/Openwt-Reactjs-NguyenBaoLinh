function check(a,b){
    if(a == 8 || b == 8) console.log('one of them is 8.');
    if(a+b == 8) console.log('sum of them is 8.')
    if(a-b == 8 || b-a == 8) console.log('difference of them is 8.')
}
check(8,16);