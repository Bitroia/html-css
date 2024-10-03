import {exibirPromocoes} from './promocoes.js';
import {adicionarAoCarrinho} from './carrinho.js';

const menuToggle = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");

menuToggle.addEventListener("click", function (){
    if(navegacao.style.display === "block"){
        navegacao.style.display = "none";
    } else {
        navegacao.style.display = "block";
    }
});

document.addEventListener('DOMContentLoaded', () =>{
    exibirPromocoes(); //Função para exibir promoções na página

    const botaoAdicionar = document.querySelector('.btn-acao');
    botaoAdicionar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const produto = event.target.closest('.produto-container');
            adicionarAoCarrinho(produto); //Adiciona o produto ao carrinho
        });
    });
});

function rolarParaCard(elementoAlvo, duration){
    const posicaoAlvo = elementoAlvo.getBoundingCleintRect
}

