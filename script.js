import Foods from "./Foods.js"; // do not forget to add  ".js"
const madarSandwich = document.querySelector("#madarSandwich")
const maderDesserts = document.querySelector("#maderDesserts")
function loadsSandwiches() {
    const xhrSandwiches = new XMLHttpRequest()
    xhrSandwiches.open("Get", "https://food.utotech.ir/getSandwiches.php", true)
    xhrSandwiches.onload = function () {
        if (xhrSandwiches.status === 200) {
            const myResponse = (JSON.parse(xhrSandwiches.responseText))
            let sandwichList = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));

            for (let i = 0; i < sandwichList.length; i++) {
                let sandwich = sandwichList[i]
                let d = `
<div class="row" id="madar">
<div class="col-lg-3 col-md-6">
<div class="coffee_img"><img src="${sandwich.url}"></div>
<h3 class="types_text">${sandwich.name}</h3>
<p class="looking_text">${sandwich.price}</p>
<div class="read_bt"><a href="#">Read More</a></div>
</div>
 
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

console.log(maderDesserts)
const madarPizza = document.querySelector("#madarPizza")

function loadsPizzas() {
    const xhrPizza = new XMLHttpRequest()
    xhrPizza.open("GET", "https://food.utotech.ir/getPizzas.php", true)
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
      <p>${pizza.price}</p>
    </div>
            `
                madarPizza.innerHTML = madarPizza.innerHTML + d

            }
        }
    }
    xhrPizza.send()

}

loadsPizzas()
loadsSandwiches()

function loadsDesserts() {
    const xhrDesserts= new XMLHttpRequest()
    xhrDesserts.open("GET", "https://food.utotech.ir/getDesserts.php", true)
    xhrDesserts.onload = function () {

        if (xhrDesserts.status === 200) {
            const myResponse = (JSON.parse(xhrDesserts.responseText))
            let ListDesserts = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));
            for (let i = 0; i < ListDesserts.length; i++) {
                let Desserts = ListDesserts[i]
                let d = `
                    <div class="menu-item">
      <img src="${Desserts.url}" alt="Desserts">
      <h3>${Desserts.name}</h3>
      <p>${Desserts.price}</p>
    </div>
            `
                maderDesserts.innerHTML = maderDesserts.innerHTML + d

            }
        }
    }
    xhrDesserts.send()

}
loadsDesserts()


