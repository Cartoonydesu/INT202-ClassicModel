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