function showButtonPassword() {
    var showPasswordButton = document.getElementById("show-button");
    var passwordInput = document.getElementById("password");
    showPasswordButton.style.display = "flex";
    passwordInput.style.borderRight = "none";

}
function showPassword() {
    var password = document.getElementById("password");
    var showMensage = document.getElementById("show-mensage");
    if (password.type == "password") {
        password.type = "text";
        showMensage.textContent = "Ocultar";
    } else {
        password.type = "password";
        showMensage.textContent = "Mostrar";
    }
}

function showButtonBorderFocus() {
    var button = document.getElementById("show-button");
    button.style.border = "1px solid #c4c4c4";
    button.style.borderLeft = "none";
}

function showButtonBorderBlur() {
    var button = document.getElementById("show-button");
    const passwordInput = document.querySelector("#password");
    var showPasswordButton = document.getElementById("show-button");

    button.style.border = "1px solid #dbdbdb";
    button.style.borderLeft = "none";

    if (passwordInput.value == "") {
        showPasswordButton.style.display = "none";
        passwordInput.style.borderRight = "1px solid #dbdbdb";
    }

}
