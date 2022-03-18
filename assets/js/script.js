const btn = document.querySelector("#btn");

const images = [
    "./assets/media/lindo.png", 
    "./assets/media/brincando.png", 
    "./assets/media/dormindo.png",
    "./assets/media/comendo.png",
    "./assets/media/cheio.png",
    "./assets/media/maloqueiro.png",
    "./assets/media/bebado.png",
    "./assets/media/obsceno.png"
];

const situacao = [
    "Situação: Sendo lindo", 
    "Situação: Brincando", 
    "Situação: Dormindo",
    "Situação: Comendo",
    "Situação: Bucho cheio",
    "Situação: Maloqueiro",
    "Situação: Bêbado",
    "Situação: +18"
];

const nome = [
    "Nome: Gatito", 
    "Nome: Doido das caixas", 
    "Nome: Gatito tatuzinho",
    "Nome: Gatito guloso",
    "Nome: Barrigudo",
    "Nome: Das quebradas",
    "Nome: O pinguço",
    "Nome: Gatito Sedução",
];

var index = 0;

btn.addEventListener("click", function () {
    if(index < (nome.length - 1)){
        index++;
        document.getElementById("gato").src = images[index];
        document.getElementById("situacao").innerText = situacao[index];
        document.getElementById("nome").innerText = nome[index];
    }else{
        index = 0;
        document.getElementById("gato").src = images[index];
        document.getElementById("situacao").innerText = situacao[index];
        document.getElementById("nome").innerText = nome[index];
    }
})