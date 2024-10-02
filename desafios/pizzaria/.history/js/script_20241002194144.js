import {exibirPromocoes} from './promocoes.js';
import {adicionarAoCarrinho} from './carrinho.js';

const menuToggle = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");

menuToggle

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

