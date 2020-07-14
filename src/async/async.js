// async & await
// clear style of using promise :)
// 1. async
async function fetchUser() {
  // do network request in 10 secs..
  return "ellie1";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}

//chaining 지옥
function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `1.${apple}+${banana}`);
  });
}

//async 로 개선 - 직렬 처리
async function pickFruits2() {
  const apple = await getApple();
  const banana = await getBanana();
  return `2.${apple}+${banana}`;
}

//async 로 개선 - 병렬 처리
async function pickFruits3() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `3.${apple}+${banana}`;
}

pickFruits().then(console.log);
pickFruits2().then(console.log);
pickFruits3().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(" (+) ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
