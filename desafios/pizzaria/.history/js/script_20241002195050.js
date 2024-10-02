import {exibirPromocoes} from './promocoes.js';
import {adicionarAoCarrinho} from './carrinho.js';

const menuToggle = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");

navegacao.style.display = "none"; //começa com menu escondido

menuToggle.addEventListener("click", function (){
    //Toggle para mostrar e esconder o menu
    //Alternar entre mostrar e esconder o menu
    if (navegacao.style.display)
    navegacao.style.display = navegacao.style.display === "flex" ? "none" : "flex";
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

