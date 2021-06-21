

const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
console.log(words('I love javaScript!!')); 
console.log(words('python, java, php'));