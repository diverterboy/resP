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

