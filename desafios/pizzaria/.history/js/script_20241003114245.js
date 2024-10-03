import { exibirPromocoes } from './promocoes.js';
import { adicionarAoCarrinho } from './carrinho.js';

const menuToggle = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");

menuToggle.addEventListener("click", function () {
    if (navegacao.style.display === "block") {
        navegacao.style.display = "none";
    } else {
        navegacao.style.display = "block";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    exibirPromocoes(); //Função para exibir promoções na página

    const botaoAdicionar = document.querySelector('.btn-acao');
    botaoAdicionar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const produto = event.target.closest('.produto-container');
            adicionarAoCarrinho(produto); //Adiciona o produto ao carrinho
        });
    });
});

function rolarParaCard(elementoAlvo, duracao) {
    const posicaoAlvo = elementoAlvo.getBoundingCleintRect().top // Posição do alvo
    const posicaoInicial = window.pageYOffset;
    const distancia = posicaoAlvo; //Distancia entre a posicao atual e o alvo
    let tempoInicial = null;

    function rolagemAnimacao(tempoCorrente) {
        if (tempoInicial === null) tempoInicial = tempoCorrente;
        const tempoDecorrido = tempoCorrente - tempoInicial;
        const corre = ease(tempoDecorrido, posicaoInicial, distancia, duracao);
        window.scroll(0, corre);
        if (tempoCorrente < duracao) requestAnimationFrame(rolagemAnimacao);
    }

    //Função de easing para suavizar a rolagem

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(rolagemAnimacao);
}

document.querySelectorAll('a[hr')




