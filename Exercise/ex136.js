function repl(input_str) {

    return input_str.replace(/[0-9]/, '$');
  }
  console.log(repl("abc1dabc"));
  console.log(repl("p3ython"));
  console.log(repl("ab1cabc"));

  