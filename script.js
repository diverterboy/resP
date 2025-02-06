import Foods from "./Foods.js"; // do not forget to add  ".js"
const madarSandwich = document.querySelector("#madarSandwich")
function loadsSandwiches() {
    const xhrSandwiches = new XMLHttpRequest()
    xhrSandwiches.open("Get", "", true)
    xhrSandwiches.onload = function () {
        if (xhrSandwiches.status === 200) {
            const myResponse = (JSON.parse(xhrSandwiches.responseText))
            let pizzas = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));
            console.log(pizzas)
            for (let i = 0; i < myResponse.length; i++) {
                let res = myResponse[i]
                let d = `
<div class="row" id="madar">
<div class="col-lg-3 col-md-6">
<div class="coffee_img"><img src="${res.url}"></div>
<h3 class="types_text">${res.name}</h3>
<p class="looking_text">${res.price}</p>
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


const madarPizza = document.querySelector("#madarPizza")

function loadsPizzas() {
    const xhrPizza = new XMLHttpRequest()
    xhrPizza.open("GET", "https://food.utotech.ir/getPizzas.php", true)
    xhrPizza.onload = function () {

        if (xhrPizza.status === 200) {
            const myResponse = (JSON.parse(xhrPizza.responseText))
            let sandwichList = myResponse.map(obj => new Foods(obj.name, obj.price, obj.url));
            for (let i = 0; i < sandwichList.length; i++) {
                let sandwich = sandwichList[i]
                let d = `
                    <div class="menu-item">
      <img src="${sandwich.url}" alt="Pizza">
      <h3>${sandwich.name}</h3>
      <p>${sandwich.price}</p>
    </div>
            `
                madarPizza.innerHTML = madarPizza.innerHTML + d

            }
        }
    }
    xhrPizza.send()

}

loadsPizzas()






