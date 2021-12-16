import {setLoading} from "./loading.js";

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