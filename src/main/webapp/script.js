//initialize page
numProduct();

function numProduct(productCode) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        cartInfo = document.getElementById("noOfItemInCart");
        noOfItem = xhttp.responseText;
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

//function usage---------

function aboutPage(){
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        const btn = document.getElementById("body-content").innerHTML = xhttp.responseText;

    }
    xhttp.open("GET","about.jsp");
    xhttp.send();
}

function loadOffice(officeCode) {
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        if (xhttp.status == 200) {
            document.getElementById("body-content").innerHTML = xhttp.responseText;
        } else {
            showLoginForm();
        }
    }
    xhttp.open("GET", "office-list?officeCode=" + officeCode);
    xhttp.send();
}

function loadProduct(page, pageSize = document.getElementById("itemsPage").value) {
    //alert('page: '+ page + ", size: "+ pageSize)
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        document.getElementById("body-content").innerHTML = xhttp.responseText;
    }
    xhttp.open("GET", "product-list?page=" + page + "&pageSize=" + pageSize);
    xhttp.send();
}

function setLoading(on_off) {
    let loading = document.getElementById("loading");
    if (on_off == 'on') {
        loading.classList.remove("d-none");
        loading.classList.add("d-inline");
    } else {
        loading.classList.remove("d-inline");
        loading.classList.add("d-none");
    }
}

function addToCart(productCode) {
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        cartInfo = document.getElementById("noOfItemInCart");
        noOfItem = xhttp.responseText;
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

function showLoginForm() {
    let menu = document.getElementById("login-menu").innerHTML;
    if (menu.includes('Logout')) {
        logout();
    } else {
        $('#modalLoginForm').modal('show');
    }
}

function login(userName, password) {
    setLoading('on')
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        setLoading('off');
        if (xhttp.status == 200) {
            $('#modalLoginForm').modal('hide');
            document.getElementById("login-menu").innerHTML="<i class='bi bi-box-arrow-left'></i> Logout"
        } else if (xhttp.status >= 500) {
            document.getElementById("login-message").innerHTML = xhttp.statusText;
        } else {
            document.getElementById("login-message").innerHTML = "Wrong user name or password !!!";
        }
    }
    // var params = "userName=" + userName + "&password=" + password;
    // //alert("params: " + params);
    // xhttp.open("GET", "login?" + params);
    // xhttp.send();
    let urlEncodedData = "", urlEncodedDataPairs = [];
    urlEncodedDataPairs.push( encodeURIComponent("userName") + '=' + encodeURIComponent(userName));
    urlEncodedDataPairs.push( encodeURIComponent("password") + '=' + encodeURIComponent(password));
    urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );
    xhttp.open("POST", "login");
    xhttp.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    xhttp.send(urlEncodedData);
}
function logout(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        location.reload();
    }
    xhttp.open("GET","logout");
    xhttp.send();
}


// function editCart(){
//     setLoading('on')
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         setLoading('off');
//         document.getElementById("view-cart").innerHTML = xhttp.responseText;
//         $('#editCartModal').modal('show');
//     }
//     xhttp.open("GET", "EditCart.jsp");
//     xhttp.send();
// }

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
    xhttp.open("GET", "update-cart?" + param);
    xhttp.send();
}

function removeItem(productCode,rowIndex){
    var confirm1 = confirm("Did you sure to remove the product  "+ productCode.id);
    if (confirm1 == true) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById(rowIndex).setAttribute("style", "display:none");
            addToCart();
        }
        var param = "productCode=" + productCode.id + "&quantity=" + 0;
        xhttp.open("GET", "update-cart?" + param);
        xhttp.send();
    }
}