// "use strict";

//Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callck"), 2000);

// 콜백, callback function using funtion expression
function callbackTest(data, printYes, printNo) {
  if (data === "yes") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function() {
  console.log("yes");
};

const printNo = function() {
  console.log("no");
};

callbackTest("yes", printYes, printNo);
callbackTest("No", printYes, printNo);

// 콜백 지옥, Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your password");
const id = "ellie";
const password = "dream";
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        console.log(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log("1.", error);
      }
    );
  },
  error => {
    console.log("2.", error);
  }
);
