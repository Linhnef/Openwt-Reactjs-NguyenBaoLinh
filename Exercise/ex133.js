function check(num) {
    return (num[1] != 0 && num[0]%num[1] != 0) ? true : false;
  }
  console.log(check([12, 300]));
  console.log(check([2, 4]));
  console.log(check([103, 3]));
  console.log(check([104, 2]));
  console.log(check([5, 40]));