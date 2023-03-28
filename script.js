let button = document.getElementById("botao")
function showMenu() {
    if (lateral.style.display == "none") {
        lateral.style.display = "block"
        conteudo.style.display = "none"
        button.innerText = "close"
    } else {
        lateral.style.display = "none"
        conteudo.style.display = "block"
        button.innerText = "menu"
    }
}
function redimensiona() {
    if (window.innerWidth >= 768) {
        lateral.style.display = "block"
        conteudo.style.display = "block"
    } else {
        lateral.style.display = "none"
        conteudo.style.display = "block"
        button.innerText = "menu"
    }
}