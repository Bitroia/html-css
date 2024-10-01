let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

export function adicionarAoCarrinho(produto) {
    const nome = produto.querySelector('.h2-sub-grid').innerText;
    const preco = produto.querySelector('.p-preco').innerText;

    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); //Seleciona a seção onde os itens serão exibidos
    console.log(`Adicionado ao carrinho: ${nome} - ${preco}`)
}

export function exibirCarrinho(){
    const carrinhoSection = document.querySelector('.carrinho-lista'); //Seleciona a seção onde os itens serão exibidos
    carrinhoSection.innerHTML = ''; //Limpa a seção antes de adicionar novos itens

    if(carrinho.lenght)
}