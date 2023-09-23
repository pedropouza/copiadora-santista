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

const atualDate = new Date();

const weekDates = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]; // 0 a 6
const weekDate = weekDates[atualDate.getDay()];  // Diz o Dia da Semana

// Objeto de formatação de hora com o fuso horário desejado
const formatterHour = new Intl.DateTimeFormat("default", {
  timeZone: "America/Sao_Paulo",
  hour: "numeric",
  hour12: false, // Usa o formato de 24 horas
});

const formattedHour = formatterHour.format(atualDate);  // Hora formatada

// Texto de Aberto / Fechado / Fecha em breve
const openClose = document.getElementById('open-close')
const openCloseText = document.querySelector('#open-close p')

function storeOpenToday() {
    openClose.classList = 'closed'
    openCloseText.innerHTML = `<span>Fechado</span> - Abre as 9h`
}
function storeOpenSoon() {
    openClose.classList = 'almost-closed-openned'
    openCloseText.innerHTML = `<span>Abre em Breve</span> - 9h`
}
function storeOpen(closeAt=19) {
    openClose.classList = 'openned'
    openCloseText.innerHTML = `<span>Aberto</span> - Fecha as ${closeAt}h`
}
function storeAlmostClosed(closeAt=19) {
    openClose.classList = 'almost-closed-openned'
    openCloseText.innerHTML = `<span>Fecha em Breve</span> - ${closeAt}h`
}
function storeClosed(nextDay) {
    openClose.classList = 'closed'
    openCloseText.innerHTML = `<span>Fechado</span> - Abre ${nextDay} as 9h`
}

switch (weekDate) {
    case 'Domingo':
        storeClosed('Segunda-Feira')
        break
    case 'Segunda-feira':
        if (formattedHour >= 0 && formattedHour < 8) {
            storeOpenToday()
        } else if (formattedHour >= 8 && formattedHour < 9) {
            storeOpenSoon()
        } else if (formattedHour >= 9 && formattedHour < 18) {
            storeOpen()
        } else if (formattedHour == 18) {
            storeAlmostClosed()
        } else {
            storeClosed('Terça-Feira')
        }
        break
    case 'Terça-feira':
        if (formattedHour >= 0 && formattedHour < 8) {
            storeOpenToday()
        } else if (formattedHour >= 8 && formattedHour < 9) {
            storeOpenSoon()
        } else if (formattedHour >= 9 && formattedHour < 18) {
            storeOpen()
        } else if (formattedHour == 18) {
            storeAlmostClosed()
        } else {
            storeClosed('Quarta-Feira')
        }
        break
    case 'Quarta-feira':
        if (formattedHour >= 0 && formattedHour < 8) {
            storeOpenToday()
        } else if (formattedHour >= 8 && formattedHour < 9) {
            storeOpenSoon()
        } else if (formattedHour >= 9 && formattedHour < 18) {
            storeOpen()
        } else if (formattedHour == 18) {
            storeAlmostClosed()
        } else {
            storeClosed('Quinta-Feira')
        }
        break
    case 'Quinta-feira':
        if (formattedHour >= 0 && formattedHour < 8) {
            storeOpenToday()
        } else if (formattedHour >= 8 && formattedHour < 9) {
            storeOpenSoon()
        } else if (formattedHour >= 9 && formattedHour < 18) {
            storeOpen()
        } else if (formattedHour == 18) {
            storeAlmostClosed()
        } else {
            storeClosed('Sexta-Feira')
        }
        break
    case 'Sexta-feira':
        if (formattedHour >= 0 && formattedHour < 8) {
            storeOpenToday()
        } else if (formattedHour >= 8 && formattedHour < 9) {
            storeOpenSoon()
        } else if (formattedHour >= 9 && formattedHour < 18) {
            storeOpen()
        } else if (formattedHour == 18) {
            storeAlmostClosed()
        } else {
            storeClosed('Sábado')
        }
        break
    case 'Sábado':
        if (formattedHour >= 0 && formattedHour < 8) {
            storeOpenToday()
        } else if (formattedHour >= 8 && formattedHour < 9) {
            storeOpenSoon()
        } else if (formattedHour >= 9 && formattedHour < 16) {
            storeOpen()
        } else if (formattedHour == 16) {
            storeAlmostClosed(17)
        } else {
            storeClosed('Segunda-Feira')
        }
        break
    default:
        console.log('Something wrong happened...')
        break
}
