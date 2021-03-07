const addUser = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const filterMillionBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calWealth = document.getElementById("calculate-wealth");
const main = document.getElementById("main");

// getRandomUser

let data = [];
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    user: `${user.name.first} ${user.name.last}`,
    income: `${Math.floor(Math.random() * 10000000)}`,
  };
  addData(newUser);
}

function addData(obj) {
  data.push(obj);
  updateDOM();
}

function updateDOM(provideddata = data) {
  main.innerHTML = `<h2>Person<strong>Wealth</strong></h2>`;
  provideddata.forEach((item) => {
    const element = document.createElement("h3");
    element.classList.add("person");
    element.innerHTML = `<strong>${formatMoney(item.income)}</strong>${
      item.user
    }`;
    main.appendChild(element);
  });
}

// format number as money
function formatMoney(num) {
  numN = +num;
  return "$" + numN.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// 左側的五種陣列方法
function doubleMoney() {
  data = data.map((user2) => {
    return { user: user2.user, income: user2.income * 2 };
    // 這裡的user也可以寫成...user，意思是完全展開（複製）user裡的內容
  });
  updateDOM();
}

function sortByRichest() {
  data.sort((a, b) => {
    return b.income - a.income;
  });
  updateDOM();
}

function showMillion() {
  data = data.filter((user) => user.income > 10000000);
  updateDOM();
}

function calEntire() {
  console.log(data);
  const wealth = data.reduce((acc, usr) => {
    return (acc += +usr.income);
  }, 0);

  const wealthEl = document.createElement("div");
  wealthEl.classList.add("totalWealth");
  wealthEl.innerHTML = `<h3>Total:<strong>${formatMoney(wealth)}</strong><h3>`;
  main.appendChild(wealthEl);
}

addUser.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
filterMillionBtn.addEventListener("click", showMillion);
calWealth.addEventListener("click", calEntire);
