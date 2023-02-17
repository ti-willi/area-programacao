const pergunta1 = document.querySelector('[data-pergunta1]');
const pergunta2 = document.querySelector('[data-pergunta2]');
const pergunta3 = document.querySelector('[data-pergunta3]');
const button1 = document.querySelector('[data-button1]');
const button2 = document.querySelector('[data-button2]');
const button3 = document.querySelector('[data-button3]');
const input1 = document.querySelector('[data-input1]');
const input2 = document.querySelector('[data-input2]');
const input3 = document.querySelector('[data-input3]');
const resultado = document.querySelector('[data-resultado]');
const escolha = document.querySelector('[data-escolha]');
const buttonSN = document.querySelector('.button-sn');
const buttonSim = document.getElementById("buttonS");
const buttonNao = document.getElementById("buttonN");
const linguagem = document.querySelector('[data-linguagem]');
const inputLinguagem = document.querySelector('[data-inputLinguagem]');
const buttonLinguagem = document.querySelector('[data-buttonLinguagem]');
const linguagem2 = document.querySelector('.linguagem2'); 
const buttonLinguagem2 = document.querySelector('[data-buttonLinguagem2]');
const respostaLinguagem2 = document.getElementById('respostaLinguagem2');




input1.focus();

button1.addEventListener ("click", () => {

    mostraPergunta2();
})

function mostraPergunta2() {

    const alterarPergunta2 = document.getElementById('pergunta2');
    
    if (input1.value === "Front-End" || input1.value === "front-end" || input1.value === "frontend" || input1.value === "FRONTEND" || input1 === "FrontEnd") {
        alterarPergunta2.textContent = "Você quer aprender React ou Vue?"
        pergunta2.style.display = "flex"
    }
    else if (input1.value === "Back-End" || input1.value === "back-end" || input1.value === "backend" || input1.value === "BACKEND" || input1 === "BackEnd") {
        alterarPergunta2.textContent = "Você quer aprender C# ou Java?"
        pergunta2.style.display = "flex"
    }
    else {
        alert("Resposta inválida")
    }

    input2.focus();

}



button2.addEventListener ("click", () => {

    mostraPergunta3();
})

function mostraPergunta3() {

    const alterarPergunta3 = document.getElementById('pergunta3');
    
    alterarPergunta3.textContent = `Você quer seguir se especializando em ${input2.value} ou ser FullStack?`;
    pergunta3.style.display = "flex";

    input3.focus();

}

button3.addEventListener ("click", () => {

    escondePerguntas();
    mostraResultado();
})

function escondePerguntas() {

    pergunta1.style.display="none";
    pergunta2.style.display="none";
    pergunta3.style.display="none";

}

function mostraResultado() {

    if(input3.value === input2.value) {
        resultado.textContent = "Continue estudando " + input3.value + "!"
    }
    else if (input3.value === "FullStack" || input3.value === "fullstack" || input3.value === "Fullstack") {
        resultado.textContent = "Aprenda novas linguagens e se torne um FullStack!"
    }
    else {
        alert("Resposta inválida")
    }

    resultado.style.display = "flex";
    escolha.style.display = "flex"
    buttonSN.style.display = "block"

}

buttonSim.addEventListener("click", () => {

    mostraLinguagem();

})

buttonNao.addEventListener("click", () => {

    buttonN();

})

function mostraLinguagem() {

    resultado.style.display = "none"
    escolha.style.display = "none"
    buttonSN.style.display = "none"
    linguagem.style.display = "flex"

    inputLinguagem.focus();

}

function buttonN() {

    const resultado2 = document.querySelector('[data-resultado2]');

    resultado.style.display = "none";
    escolha.style.display = "none";
    buttonSN.style.display = "none";
    resultado2.style.display = "block";
    resultado2.textContent = "Ok";

}

buttonLinguagem.addEventListener("click", () => {

        mostraResultado2();

    
})

function mostraResultado2() {

    const inputUser = inputLinguagem.value

    linguagem2.style.display = "flex";
    respostaLinguagem2.style.display = "flex";

    respostaLinguagem2.textContent = `${inputUser} é muito legal!`
    
}

buttonLinguagem2.addEventListener("click", () => {

    linguagem.style.display = "none";
    linguagem2.style.display = "none";
    respostaLinguagem2.style.display = "none";
    resultado.style.display = "none";
   
    mostraResultado();

    inputLinguagem.value = "";

})
















