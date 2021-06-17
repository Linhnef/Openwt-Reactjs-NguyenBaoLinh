/* //#Source https://bit.ly/2neWfJ2 
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a'));  */


function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;

let getProp = (obj,inherited = false) => {
  return inherited ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))] : Object.keys(obj);
}
console.log(getProp(new Foo()));
console.log(getProp(new Foo(), true));

