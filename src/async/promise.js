// promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejectedd
// Producer vs Consumer

// 1.Producer
// Promise(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void):
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then , catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log("finally"));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`chick`), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} -> egg`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} -> egg`)), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} -> eat`), 1000);
  });

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));

// getHen()
//   .then(getEgg)
//   .then(cook)
//   .then(console.log);

getHen()
  .then(getEgg)
  .catch(error => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
