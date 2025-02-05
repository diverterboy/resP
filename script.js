import foods from "./Foods.js"; // do not forget to add  ".js"


function loadsSandwiches() {
    const xhrSandwiches = new XMLHttpRequest()
    xhrSandwiches.open("Get", "https://utotech.ir/rest/pizza/midgaurdpizza.php", true)
    xhrSandwiches.onload = function () {
        if (xhrSandwiches.status === 200) {
            const myResponse = (JSON.parse(xhrSandwiches.responseText))
            let pizzas = myResponse.map(obj => new Foods(obj.foodname, obj.price, obj.ingredients));
            console.log(pizzas)
            for (let i = 0; i < myResponse.length; i++) {
                let res = myResponse[i]
                let food = new food(res.name, res.price, res.url)
                let d = `
<div class="row" id="madar">
<div class="col-lg-3 col-md-6">
<div class="coffee_img"><img src="${food.url}"></div>
<h3 class="types_text">${food.name}</h3>
<p class="looking_text">${food.price}</p>
<div class="read_bt"><a href="#">Read More</a></div>
</div>
 
</div>
`
                madar.innerHTML = madar.innerHTML + d

            }
        }
    }
    xhrSandwiches.send()

}

loadsSandwiches()
const madarPizza = document.querySelector("#madarPizza")

function loadsPizza() {
    const xhrPizza = new XMLHttpRequest()
    xhrPizza.open("GET", "https://utotech.ir/rest/sss.php", true)
    xhrPizza.onload = function () {

        if (xhrPizza.status === 200) {
            const myResponse = (JSON.parse(xhrPizza.responseText))
            for (let i = 0; i < myResponse.length; i++) {
                let res = myResponse[i]
                console.log(res)
                let d = `
                    <div class="menu-item">
      <img src="${res.url}" alt="Pizza">
      <h3>Margherita</h3>
      <p>Classic pizza with fresh basil, mozzarella</p>
    </div>
            `
                madarPizza.innerHTML = madarPizza.innerHTML + d

            }
        }
    }
    xhrPizza.send()

}

loadsPizza()

const pizza = new foods("pizza", 1009, "cheese")


console.log(pizza)



