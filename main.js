function loginclick() {
    sessionStorage.clear();
    var naame = document.getElementsByName("nameclient")[0].value;
    var emil = document.getElementsByName("email")[0].value;
    var pass = document.getElementsByName("pass")[0].value;

    if (!naame || !emil || !pass) { return; }
    else {
        sessionStorage.setItem("namme", naame)
        sessionStorage.setItem("emila", emil)
        sessionStorage.setItem("passw", pass)
        window.location.assign("/index.html");
    }
}
function getvalue() {
    var namee = sessionStorage.getItem("namme")
    var emaail = sessionStorage.getItem("emila")
    document.getElementsByName("Youremail")[0].value = emaail;
    document.getElementsByName("Yourname")[0].value = namee;
};
function getuserdetels() {
    var password = sessionStorage.getItem("passw")
    var eemaail = sessionStorage.getItem("emila")
    var teemaail = document.getElementsByName("Emaill")[0].value;
    var tpassword = document.getElementsByName("passwword")[0].value;

    if (password == tpassword || teemaail == eemaail) {
        window.location.assign("/home.html");
    }
    else { alert("You Dont Have Account"); }
}

function singout() {
    window.location.assign("/index.html");

}
function changepass() {
    
    var nameie = document.getElementsByName("Yourname")[0].value;
    var emaaiil = document.getElementsByName("Youremail")[0].value;

    sessionStorage.removeItem("namme");
    sessionStorage.removeItem("emila");

    sessionStorage.setItem("namme", nameie)
    sessionStorage.setItem("emila", emaaiil)

    document.getElementsByName("Youremail")[0].value = emaaiil;
    document.getElementsByName("Yourname")[0].value = nameie;
}



