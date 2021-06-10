function check(x, y, divisor) {
    if(x % divisor == 0 && y % divisor == 0 || x % divisor != 0 && y % divisor != 0) {
      return true;
    }
    return false;
  }

console.log(check(10,5,5));
console.log(check(10,4,5));