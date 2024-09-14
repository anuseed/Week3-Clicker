console.log("test");

let cookieCount = 0;
let cookiesPerSecond = 1;
let shopUpgrades = [];

const cookieCountContainer = document.getElementById("cookie-count");
console.log(cookieCountContainer);

const cookieButton = document.getElementById("cookie-button");
console.log(cookieButton);

const cookiesPerSecondContainer = document.getElementById(
  "cookies-per-second-container"
);
console.log(cookiesPerSecondContainer);

const cookiesPerSecondValue = document.getElementById(
  "cookies-per-second-value"
);
console.log(cookiesPerSecondValue);

const shopUpgradesContainer = document.getElementById("shop-upgrades");

function displayCookiesPerSecondValue() {
  cookiesPerSecondValue.content = cookiesPerSecond;
}
//this function logs the amount of times the user clicks the cookie button/image and displays it on the html
function handleClick() {
  cookieCount = cookieCount + 1;
  cookieCountContainer.textContent =
    "You have clicked " + cookieCount + " cookies!";
  console.log(cookieCount);
}

cookieButton.addEventListener("click", handleClick);

function handleBuyClick(event) {
  console.log("buy!");
  console.log(event.target.id);
  let buttonId = event.target.id;

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
  shopUpgrades.find((i) => {
    return;
  });
  //   // TODO: complete this function
  // this function should use the shopUpgrades array and return an object from the array
  // if its id is the same as the id passed in as a parameter to this function
  // hint: you will need a for loop and ifs / elses
  // return ...
}

//this function uses the data from the API and renders it onto the page
function renderShopUpgrades() {
  shopUpgrades.forEach((item) => {
    let makeDiv = document.createElement("div");
    let buyButton = document.createElement("button");
    buyButton.textContent = "Buy";
    buyButton.addEventListener("click", handleBuyClick);
    buyButton.id = `${item.id}`;
    makeDiv.textContent = `${item.name},Item Cost ${item.cost},Cookies Per Second ${item.increase}`;
    makeDiv.className = "upgrades-box";
    shopUpgradesContainer.appendChild(makeDiv);
    shopUpgradesContainer.appendChild(buyButton);
  });
}
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
//this function makes  getShopUgrades() wait before
async function main() {
  await getShopUpgrades();
  console.log(shopUpgrades);
}

main();
