//console.log("hi world from JS, i hate JS");
window.onload=function() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");

    const login = async () => {
        const user =  {username: username.value, password: password.value};
        const res = await fetch("http://localhost:5000/login/", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        });
        const data = await res.json();
        if (data.loggedIn) {
            sessionStorage.setItem("id", data.user.user_id);
            sessionStorage.setItem("name", data.user.first_name);
            window.location = "./pages/home.html?id=" + data.user.user_id;
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