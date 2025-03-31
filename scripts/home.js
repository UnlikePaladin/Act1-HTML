window.onload = () => {
    if (!sessionStorage.name) {
        window.location = "../index.html";
    } else {
        const h1 = document.getElementById("h1");
        h1.innerHTML = "Hola " + sessionStorage.name;
        console.log("hola", sessionStorage.name);
    }
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    sessionStorage.removeItem("name")
    window.location = "../index.html";
});


const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("sendBtn");

function sendMsg(){
        chat.value += "\n" + msg.value;
        msg.value ="";
        chat.scrollTop = chat.scrollHeight;
}

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        sendMsg();
    }
});