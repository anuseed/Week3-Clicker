console.log("test");

let cookieCount = 0;
let cookiesPerSecond = 1;
let shopUpgrades = [];

const cookieCountContainer = document.getElementById("cookie-count");
const cookieButton = document.getElementById("cookie-button");
const cookieCountValue = document.getElementById("cookie-count-value");
const cookiesPerSecondContainer = document.getElementById(
  "cookies-per-second-container"
);
const cookiesPerSecondValue = document.getElementById(
  "cookies-per-second-value"
);
const shopUpgradesContainer = document.getElementById("shop-upgrades");

const resetButton = document.getElementById("reset-button");

const cookieWord = document.getElementById("cookie-word");

resetButton.addEventListener("click", resetCookieCount);

function resetCookieCount() {
  cookieCount = 0;
  displayCookieCountValue();
  console.log(cookieCount);
  saveLocalStorage();
}

function displayCookiesPerSecondValue() {
  cookiesPerSecondValue.textContent = cookiesPerSecond;
  if (cookiesPerSecond == 1) {
    cookieWord.textContent = "Cookie";
  } else {
    cookieWord.textContent = "Cookies";
  }
}
//why does my if statement not work above?- changed cookiesPerSecondValue to cookiesPerSecond and then it worked but needed to add ${cookiesPerSecond} to new text content - maybe this will result in issues later when I change the value of cookiesPerSecond later? ok this definitely messed up my cookiesPerSecond value - when trying to style in css I noticed it's no longer there.

function displayCookieCountValue() {
  cookieCountValue.textContent = cookieCount;
}

displayCookiesPerSecondValue();

function increaseCookiesByCookiesPerSecond() {
  cookieCount = cookieCount + cookiesPerSecond;
  displayCookieCountValue();
  saveLocalStorage();
}

setInterval(increaseCookiesByCookiesPerSecond, 1000);

//this function logs the amount of times the user clicks the cookie button/image and displays it on the html
function handleClick() {
  cookieCount = cookieCount + 1;
  displayCookieCountValue();
  console.log(cookieCount);
  saveLocalStorage();
}

cookieButton.addEventListener("click", handleClick);

function handleBuyClick(event) {
  console.log("buy!");
  console.log(event.target.id);
  let buttonId = event.target.id;
  return buttonId;

  // Step 1: Get the id of the button that was clicked
  // let buttonId = ...

  // Step 2: Get the object from shopUpgrades with the same id as the button that was clicked
  //         (call a function created outside this one - suggestion: call it getObjectWithId(id))
  // let object = ...

  // Step 3: Use the object to add `increase` to fliesPerSecond (if the user has enough cookieCount)
  //         If they did, also subtract the `cost` from cookieCount

  // Step 4: Update the text of cookieCountContainer and fliesPerSecondContainer
}

function getObjectWithId(id) {
  for (let i = 0; i < shopUpgrades.length; id++) {
    let shopUpgrade = shopUgrades[i];
    console.log(shopUgrade.id);
    if (shopUpgrade.id == buttonId) {
      return shopUpgrade;
    } else return "Unknown";
  }
}

//   // TODO: complete this function
// this function should use the shopUpgrades array and return an object from the array
// if its id is the same as the id passed in as a parameter to this function
// hint: you will need a for loop and ifs / elses
// return ...
// }

//this function uses the data from the API and renders it onto the page
function renderShopUpgrades() {
  shopUpgrades.forEach((item) => {
    let makeDiv = document.createElement("div");
    let buyButton = document.createElement("button");
    buyButton.textContent = "Buy";
    buyButton.addEventListener("click", handleBuyClick);
    buyButton.id = `${item.id}`;
    makeDiv.textContent = `${item.name}, 
    COST: ${item.cost}C, 
    gives you ${item.increase}Cookies Per Second`;
    makeDiv.className = "upgrades-box";
    shopUpgradesContainer.appendChild(makeDiv);
    shopUpgradesContainer.appendChild(buyButton);
  });
}
//how can I style individual elements in the makeDiv? Like the item.name and item.cost?

//this function fetches the data from the API and console logs it
async function getShopUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const shopData = await response.json();
  console.log(shopData);
  shopUpgrades = shopData;
  console.log(shopUpgrades);
  renderShopUpgrades();
}
function saveLocalStorage() {
  const data = {
    cookieCount: cookieCount,
    cookiesPerSecond: cookiesPerSecond,
  };
  const stringifiedData = JSON.stringify(data);

  localStorage.setItem("cookieData", stringifiedData);
}

function loadLocalStorage() {
  const retrieveData = localStorage.getItem("cookieData");
  //this if statement stops the data from local storage being retrieved if the user is using the clicker for the first time to avoid an error of property of null
  if (retrieveData == null) {
    return;
  }

  const data = JSON.parse(retrieveData);

  cookieCount = data.cookieCount;
  cookiesPerSecond = data.cookiesPerSecond;
}

loadLocalStorage();

//this function makes  getShopUgrades() wait before
async function main() {
  await getShopUpgrades();
  console.log(shopUpgrades);
}

main();
