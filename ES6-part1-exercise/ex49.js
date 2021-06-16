function Foo() {
    this.a = () => 1;
    this.b = () => 2;
  }
  Foo.prototype.c = () => 3;

let getProp = (obj,inherited = false) => {
    return inherited     ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))] : Object.keys(obj);
}
  console.log(getProp(new Foo()));
  console.log(getProp(new Foo(), true));

