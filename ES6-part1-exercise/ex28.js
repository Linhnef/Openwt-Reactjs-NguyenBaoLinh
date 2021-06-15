let fun_ = (x) =>{
    console.log('Time function run is : ');
}
let start = new Date().getTime();
fun_();
let end = new Date().getTime();
console.log(end-start + 'ms');