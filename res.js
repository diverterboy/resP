console.log("ame")


function selectRestaurant(items){
    localStorage.setItem("res",items)
    window.location.href = "index.html";
}
selectRestaurant()