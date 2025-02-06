const restaurantList = document.querySelector("#restaurantList")
const xhrRestaurant = new XMLHttpRequest()

function loadRestaurants () {

    const xhrRestaurant = new XMLHttpRequest()
    xhrRestaurant.open("Get", "https://food.utotech.ir/restaurants.php", true)
    xhrRestaurant.onload = function () {


        if (xhrRestaurant.status === 200) {
            const myResponse = (JSON.parse(xhrRestaurant.responseText))
            for (let i = 0; i < myResponse.length; i++) {
                let restaurants = myResponse[i]
                console.log(restaurants)
                let r = ` <li onclick="selectRestaurant('${restaurants}')">${restaurants}</li>
           `

                restaurantList.innerHTML = restaurantList.innerHTML + r
            }
        } else {
            console.log(xhrRestaurant.status)
        }
    }
    xhrRestaurant.send()

}
function selectRestaurant(items){
    localStorage.setItem("res",items)
    window.location.href = "index.html";
}
loadRestaurants()
