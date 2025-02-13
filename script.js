import Foods from "./Foods.js";
import CustomerOrder from "./CustomerOrder.js";
import Order from "./Order.js";
const madarSandwich = document.querySelector("#madarSandwich")
const maderDesserts = document.querySelector("#maderDesserts")
const madarPizza = document.querySelector("#madarPizza")
const madarDrinks = document.querySelector("#madarDrinks")
const madarBurgers = document.querySelector("#madarBurgers")
const resName= localStorage.getItem("res")




function getUrls(){
        switch (resName){
            case "پیتزا سی تو":
                return "pizzaC2"
            case "مش دونالد":
                return "mashDonald"
            case "کبابی روناک":
                return "kababironak"
            case "پیتزا دادلی":
                return "pizzaDadli"

        }
    }
function loadsSandwiches(resName) {
    const xhrSandwiches = new XMLHttpRequest()
    xhrSandwiches.open("Get", "https://food.utotech.ir/"+resName+"/getSandwiches.php", true)
    xhrSandwiches.onload = function () {
        if (xhrSandwiches.status === 200) {
            const myResponse = (JSON.parse(xhrSandwiches.responseText))
            let sandwichList = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));

            for (let i = 0; i < sandwichList.length; i++) {
                let sandwich = sandwichList[i]
                let d = `
                    <div class="menu-item">
      <img src="${sandwich.url}" alt="Pizza">
      <h3>${sandwich.name}</h3>
      <p>${sandwich.price+"تومان"}</p>
    </div>
            `
                madarSandwich.innerHTML = madarSandwich.innerHTML + d

            }
        }else {
            console.log(xhrSandwiches.status)
        }
    }
    xhrSandwiches.send()

}
function loadsPizzas(resName) {
    const xhrPizza = new XMLHttpRequest()
    xhrPizza.open("GET", "https://food.utotech.ir/"+resName+"/getPizzas.php", true)
    xhrPizza.onload = function () {

        if (xhrPizza.status === 200) {
            const myResponse = (JSON.parse(xhrPizza.responseText))
            let pizzaList = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));
            for (let i = 0; i < pizzaList.length; i++) {
                let pizza = pizzaList[i]
                let d = `
                    <div class="menu-item">
      <img src="${pizza.url}" alt="Pizza">
      <h3>${pizza.name}</h3>
      <p>${pizza.price+"تومان"}</p>
    </div>
            `
                madarPizza.innerHTML = madarPizza.innerHTML + d

            }
        }
    }
    xhrPizza.send()

}
function loadDrinks(resName) {
    const xhrdrinks = new XMLHttpRequest()
    xhrdrinks.open("GET", "https://food.utotech.ir/"+resName+"/getDrinks.php", true)
    xhrdrinks.onload = function () {

        if (xhrdrinks.status === 200) {
            const myResponse = (JSON.parse(xhrdrinks.responseText))
            let drinksList = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));
            for (let i = 0; i < drinksList.length; i++) {
                let drink = drinksList[i]
                let d = `
                    <div class="menu-item">
      <img src="${drink.url}" alt="Pizza">
      <h3>${drink.name}</h3>
      <p>${drink.price+"تومان"}</p>
    </div>
            `
                madarDrinks.innerHTML = madarDrinks.innerHTML + d

            }
        }
    }
    xhrdrinks.send()

}
function loadsDesserts(resName) {
    const xhrDesserts= new XMLHttpRequest()
    xhrDesserts.open("GET", "https://food.utotech.ir/"+resName+"/getDesserts.php", true)
    xhrDesserts.onload = function () {

        if (xhrDesserts.status === 200) {
            const myResponse = (JSON.parse(xhrDesserts.responseText))
            let ListDesserts = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));
            for (let i = 0; i < ListDesserts.length; i++) {
                let Desserts = ListDesserts[i]
                let d = `
                    <div class="menu-item">
      <img src="${Desserts.url}" class="imgs" alt="Desserts">
      <h3>${Desserts.name}</h3>
      <p>${Desserts.price+"تومان"}</p>
    </div>
            `
                maderDesserts.innerHTML = maderDesserts.innerHTML + d

            }
        }
    }
    xhrDesserts.send()

}
function loadBurgers(resName) {
    const xhrBurgers = new XMLHttpRequest()
    xhrBurgers.open("GET", "https://food.utotech.ir/"+resName+"/getBurgers.php", true)
    xhrBurgers.onload = function () {

        if (xhrBurgers.status === 200) {
            const myResponse = (JSON.parse(xhrBurgers.responseText))
            let BurgersList = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));
            for (let i = 0; i < BurgersList.length; i++) {
                let Burgers = BurgersList[i]
                let d = `
                    <div class="menu-item">
      <img src="${Burgers.url}" alt="Burgers">
      <h3>${Burgers.name}</h3>
      <p>${Burgers.price+"تومان"}</p>
    </div>
            `
                madarBurgers.innerHTML = madarBurgers.innerHTML + d

            }
        }
    }
    xhrBurgers.send()

}




loadBurgers(getUrls())
loadsPizzas(getUrls())
loadsSandwiches(getUrls())
loadDrinks(getUrls())
loadsDesserts(getUrls())
