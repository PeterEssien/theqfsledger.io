const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const buttonSenha = document.querySelector(".eye-password")
const imgEmail = document.querySelector(".img-email")
const imgPassword = document.querySelector(".img-password")

document.body.onload = mudaIcon(imgEmail, "./assets/mail-focus.svg")
inputEmail.addEventListener("focus", () => mudaIcon(imgEmail, "https://raw.githubusercontent.com/danieldemoura/login-form-css/main/assets/mail-focus.svg"))
inputEmail.addEventListener('focusout', () => mudaIcon(imgEmail, "https://raw.githubusercontent.com/danieldemoura/login-form-css/main/assets/mail.svg"));
inputPassword.addEventListener("focus", () => mudaIcon(imgPassword, "https://raw.githubusercontent.com/danieldemoura/login-form-css/main/assets/lock-focus.svg"))
inputPassword.addEventListener("focusout", () => mudaIcon(imgPassword, "https://raw.githubusercontent.com/danieldemoura/login-form-css/main/assets/lock.svg"))
buttonSenha.addEventListener("click", mostrarEOcultarSenha)

function mostrarEOcultarSenha() {
    if(inputPassword.type === "password") {
        buttonSenha.setAttribute("src", "https://raw.githubusercontent.com/danieldemoura/login-form-css/main/assets/eye-off.svg")
        inputPassword.type = "text"   
    } else {
        buttonSenha.setAttribute("src", "https://raw.githubusercontent.com/danieldemoura/login-form-css/main/assets/eye-on.svg")
        inputPassword.type = "password"
    }
}

function mudaIcon(imagem, url) {
    imagem.setAttribute("src", url)
}
