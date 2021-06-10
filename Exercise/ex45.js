function check(a,b){
    return (a==8 || b==8 || (a+b)==8 || (a-b)==8 || (b-a)==8) ? true : false;
}
console.log(check(4,4));
console.log(check(16,8));
console.log(check(422,4));


