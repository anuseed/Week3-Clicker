function handleFlyCount (){

}

//choose one of these ways to make the objects

let stats = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};

// we need DOM manipulation
//  we need to select the DOM elements (p, img ..)

//we also need a way to store the shop upgrades that come from the shop API (API uses arrays so do the same)

let shopUpgrades = [];

//fetch the items from the API

function getShopUpgrades() {
  //fetch the data
  //translate into JSON
  //PUSH the items into the shopUgrades array above
}

//an event listener to click on the cookie button
//select the cookie img or button
//write your event handler and event listener
function handleCookieClicker() {
  //when I click on the cookie, the value of cookieCount goes up by one
}

addEventListener("click", handleCookieClicker);

//we need a timer that increases the cookies counter value by one every second 
setInterval(fucntion(){
//i want to increase the value of the cookie counter by one every second
//i want to update the values that are displayed on the page( this task can also be a seperate function for example updateCookieCount() and you would call this function inside the setInterval function )
//i want to store these values in my local storage ( this task can also be a seperate function for example storeLocalStorage() and you would call this function inside the setInterval function )
,1000})

//===================================
//extra function blocks
//posb solutions to promblem s
function renderShopUpgrades ()
{
    //create DOM elements
    //you will use a loop or array method 
    shopUpgrades.forEach (fucntion(upgrade )){
        //for eash item in the array, asign the value to a DOM element
        //append the element to the DOM
    }
}

function saveLocalStorage () {
//a method that turns your data into string soup 
//a method to set the data intokey and values in local storage 
}