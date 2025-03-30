/* Selecionando Elementos do Index */
let menu = document.querySelector(".menu-burguer");
let body = document.querySelector("body");
let container = document.querySelector(".containerblur");



/* Criando Lista */
let lista = document.createElement("ul");
lista.classList.add("lista-menu");
let item1 = document.createElement("a");
item1.setAttribute("href", "../../index.html");
let item2 = document.createElement("a");
item2.setAttribute("href", "./assets/pages/project.html");
let item3 = document.createElement("a");
item3.setAttribute("href", "./assets/pages/galery.html");
let item4 = document.createElement("a");
item4.setAttribute("href", "./assets/pages/news.html");
let item5 = document.createElement("a");
item5.setAttribute("href", "./assets/pages/calendar.html");

/* Selecionando Imagem do X */
let containerLogo = document.createElement("figure");
let imgLogo = document.createElement("img");
imgLogo.classList.add("logo-neo");
imgLogo.setAttribute("src", "./assets/img/logo.png");
containerLogo.appendChild(imgLogo);

/* Selecionando Botão de Fechar Menu */4
let buttonClose = document.createElement("div");
buttonClose.classList.add("buttonClose");
let imgClose = document.createElement("img");
imgClose.setAttribute("src", "./assets/img/close_menu.svg");
imgClose.classList.add("imgClose");
buttonClose.appendChild(imgClose);

/* Adicionando Nome aos Itens da Lista */
item1.innerHTML = "INÍCIO";
item2.innerHTML = "O PROJETO";
item3.innerHTML = "GALERIA";
item4.innerHTML = "NOTÍCIAS";
item5.innerHTML = "AGENDA";

/* Itens Sendo Adicionado a Lista */
lista.appendChild(buttonClose);
lista.appendChild(containerLogo);
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);
lista.appendChild(item4);
lista.appendChild(item5);

/* Criando Função Adicionar Menu */
menu.addEventListener('click', adicionarMenu);

/* Função Sendo Utilizada */
function adicionarMenu() {
    console.log("Aiiii")
    container.classList.add("blur");
    body.appendChild(lista);
}

/* Criando Função Remover Menu */
imgClose.addEventListener('click', removerMenu);

function removerMenu() {
    container.classList.remove("blur");
    lista.remove();
}