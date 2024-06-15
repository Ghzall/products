
var allProducts = document.querySelectorAll(".container .card1")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#showPrice")
var tprice = document.querySelector("#divPrice")
var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function (){
        totalPrice +=  +(item.getAttribute("price"))
        div1.innerHTML += item.textContent + " + "

        if (div1.innerHTML != ""){
            btn1.style.display = "block"
            btn1.style.width = "200px"
            btn1.style.height = "45px"
            btn1.style.backgroundColor = "rgb(197, 204, 211)"
            btn1.style.color = "rgb(145, 35, 16)"
            btn1.style.fontSize = "23px"
            btn1.style.margin = "auto"
        }

    }
})

btn1.onclick = function (){
   if(div1.innerHTML != ""){
    tprice.style.display = "block"
   }
   tprice.innerHTML = totalPrice
}




