const container = document.querySelector('.container')
const buttonFront = document.querySelector('[data-buttonFront]');
const buttonBack = document.querySelector('[data-buttonBack]');
const pergunta2 = document.querySelector('[data-pergunta2]');
const button2 = document.querySelector('[data-button2]');
const buttonEscolha = document.querySelectorAll('[data-buttonEscolha]');
const buttonEscolha1 = document.getElementById('escolha1');
const buttonEscolha2 = document.getElementById('escolha2');
const button3 = document.querySelector('[data-button3]');
const buttonEscolha3 = document.getElementById('escolha3');
const buttonEscolha4 = document.getElementById('escolha4');
const pergunta3 = document.querySelector('[data-pergunta3]');
const perguntaVar = document.getElementById('pergunta3');
const buttonVar = document.querySelector('[data-buttonVar]')
const buttonLinguagem = document.querySelector('[data-buttonLinguagem]');
const buttonFullStack = document.querySelector('[data-buttonFullStack]');


buttonFront.addEventListener("click", () => {
    mostraPerguntaFront();
})

function mostraPerguntaFront() {
    pergunta2.style.display = "block";
    button2.style.display = "block";
}

buttonBack.addEventListener("click", () => {
    mostraPerguntaBack();
})

function mostraPerguntaBack() {
    pergunta2.style.display = "block";
    button3.style.display = "block";
}

buttonEscolha1.addEventListener("click", () => {
    pergunta3.style.display = "block";
    buttonVar.style.display = "block";
    perguntaVar.textContent = "Você quer seguir estudando React ou ser Fullstack?"
    buttonLinguagem.textContent = "REACT"
    
})

buttonEscolha2.addEventListener("click", () => {
    pergunta3.style.display = "block";
    buttonVar.style.display = "block";
    perguntaVar.textContent = "Você quer seguir estudando Vue ou ser Fullstack?"
    buttonLinguagem.textContent = "VUE"
})

buttonEscolha3.addEventListener("click", () => {
    pergunta3.style.display = "block"
    buttonVar.style.display = "block";
    perguntaVar.textContent = "Você quer seguir estudando C# ou ser Fullstack?"
    buttonLinguagem.textContent = "C#"
})

buttonEscolha4.addEventListener("click", () => {
    pergunta3.style.display = "block"
    buttonVar.style.display = "block";
    perguntaVar.textContent = "Você quer seguir estudando Java ou ser Fullstack?"
    buttonLinguagem.textContent = "JAVA"
})














