window.onload = () => {
    if (!sessionStorage.name) {
        window.location = "../index.html";
    } 
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    sessionStorage.removeItem("name")
    window.location = "../index.html";
});