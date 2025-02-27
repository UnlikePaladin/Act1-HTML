//console.log("hi world from JS, i hate JS");
window.onload=function() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");

    const login = () => {
        if (username.value === "paladin" && password.value === "1234") {
            sessionStorage.setItem("name", "Paladin")
            window.location = "./pages/home.html";
        } else {
            alert("Wrong username or password");
        }
    }


    btnLogin.addEventListener("click", login);

    password.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            login();
        }
    });  
}