const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  a: 123,
  arr: [123, 345, 6676],
  obj: {
    plus: function(x, y) {
      return x + y;
    }
  }
};

console.log(calculator.plus(1, 2));
console.log(calculator.minus(1, 2));
console.log(calculator.a);
console.log(calculator.arr);
console.log(calculator.arr[2]);
console.log(calculator.obj.plus(1, 2));
//console.log(a);

const app = document.getElementById("app");

console.log(app);
