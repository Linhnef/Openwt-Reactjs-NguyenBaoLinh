let excute = (x) =>  encodeURI(x).split(/%..|./).length - 1;
console.log(excute('123456'));  
console.log(excute('Hello World'));  
console.log(excute('Ã¢')); 