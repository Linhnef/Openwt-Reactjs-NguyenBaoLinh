

const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
console.log(validateNumber('200'));
console.log(validateNumber('10'));
console.log(validateNumber('abc'));