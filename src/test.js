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

//console.log(calculator.plus(1, 2));
//console.log(calculator.minus(1, 2));
//console.log(calculator.a);
//console.log(calculator.arr);
//console.log(calculator.arr[2]);
//console.log(calculator.obj.plus(1, 2));

const app = document.getElementById("app");
const app1 = document.querySelector("#app");

//console.dir(app);
//console.log(app1);

//app.innerHTML = "Test INNER HTML";

function handleResize(event) {
  console.log(event);
  //console.log("I have been resize");
}

//window.addEventListener("resize", handleResize);

const BASE_COLOR = "#0000ff";
const CHANGE_COLOR = "rgb(52,73,94)";

function handleClick(event) {
  console.log(app1.querySelector("h1").style.color);

  if (app1.querySelector("h1").style.color === "rgb(0, 0, 255)") {
    app1.querySelector("h1").style.color = CHANGE_COLOR;
  } else {
    app1.querySelector("h1").style.color = BASE_COLOR;
  }
}

app.addEventListener("click", handleClick);

function hanndleOffline() {
  console.log("offline");
}

function hanndleOnline() {
  console.log("online");
}

window.addEventListener("offline", hanndleOffline);

window.addEventListener("online", hanndleOnline);

//localStorage.setItem("_name", true);
console.log(localStorage.getItem("_name"));

const name = localStorage.getItem("_name");

console.log(name);

if (name === null) {
  localStorage.setItem("_name", "pdkship");
}
