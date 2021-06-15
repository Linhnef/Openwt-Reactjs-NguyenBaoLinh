let change = col => {
    return '#' +
    col
      .slice(col[0]=='#' ? 1 : 0)
      .split('')
      .map(x => x + x)
      .join('');
}

console.log(change('#03f'));
console.log(change('05a'));