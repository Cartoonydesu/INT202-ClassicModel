import {setLoading} from "./loading.js";

function addToCart(productCode) {
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        const cartInfo = document.getElementById("noOfItemInCart");
        let noOfItem = xhttp.responseText;
//                alert("Response = "+ noOfItem);
        if (noOfItem > 0) {
            cartInfo.style.display = 'inline'
        } else {
            cartInfo.style.display = 'none'
        }
        cartInfo.innerHTML = noOfItem;
    }
    xhttp.open("GET", "add-to-cart?productCode=" + productCode);
    xhttp.send();
}

function noOfProduct(){

}

function viewCart() {
    setLoading('on');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        document.getElementById("view-cart").innerHTML = xhttp.responseText;
        $('#viewCartModal').modal('show');
    }
    xhttp.open("GET", "ViewCart.jsp");
    xhttp.send();
}

function editCart(){
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        document.getElementById("view-cart").innerHTML = xhttp.responseText;
        $('#editCartModal').modal('show');
    }
    xhttp.open("GET", "EditCart.jsp");
    xhttp.send();
}
function updateCart(productCode,index,price) {
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    let pCode = productCode.id;
    let qty = productCode.value;
    xhttp.onload = function () {
        setLoading('off');
        document.getElementById("show-total-"+index).textContent = (qty*price).toFixed(2);
        addToCart();
    }
    var param = "productCode="+ pCode +"&quantity="+ qty;
    xhttp.open("GET", "update-to-cart?" + param);
    xhttp.send();
}
function removeItem(productCode,rowIndex){
    var confirm1 = confirm("Are you sure? \n to remove this product = "+ productCode.id);
    if (confirm1 == true) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById(rowIndex).setAttribute("style", "display:none");
            addToCart();
        }
        var param = "productCode=" + productCode.id + "&quantity=" + 0;
        xhttp.open("GET", "update-to-cart?" + param);
        xhttp.send();
    }
}