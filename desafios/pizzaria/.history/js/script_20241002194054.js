import {exibirPromocoes} from './promocoes.js';
import {adicionarAoCarrinho} from './carrinho.js';

const menu

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

