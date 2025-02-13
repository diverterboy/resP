import Order from "./Order.js";
const madarorder = document.querySelector("#madaroder")



function loadOder() {
    const xhrOrder = new XMLHttpRequest()
    xhrOrder.open("Get", "https://food.utotech.ir/tstOrder.php", true)
    xhrOrder.onload = function () {
        if (xhrOrder.status === 200) {
            const myResponse = (JSON.parse(xhrOrder.responseText))

            for (let i = 0; i < myResponse.orderList.length; i++) {
                let order = myResponse.orderList[i]
                let d = `
                 <tr>
                <td>${order.foodName}</td>
                <td>${order.amount}</td>
                <td>${order.price}</td>
            </tr>
            `
                madarorder.innerHTML = madarorder.innerHTML + d

            }
        }else {
            console.log(xhrOrder.status)
        }
    }
    xhrOrder.send()

}

loadOder()