const btn = document.querySelector("#btn");

const images = ["./assets/media/fofo.png", "./assets/media/brincando.png", "./assets/media/dormindo.png"];

const situacao = ["Situação: Fofo", "Situação: Brincando", "Situação: Dormindo"];

const nome = ["Nome: Gatinho", "Nome: Gato selvagem", "Nome: Belo adormecido"];

var index = 0;

btn.addEventListener("click", function () {
    if(index < 2){
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