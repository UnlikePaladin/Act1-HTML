window.onload = () => {
    if (!sessionStorage.name) {
        window.location = "../index.html";
    } else {
        const welcome = document.getElementById("welcome");
        welcome.innerHTML = "Hola " + sessionStorage.name + ", este es un juego!";
        console.log("hola", sessionStorage.name);

        let paramString = window.location.href.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        if (!queryString.has("playerID")) {
            window.location = "./game.html?playerID=" + sessionStorage.getItem("id");
        }
    }
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    sessionStorage.removeItem("name")
    window.location = "../index.html";
});
