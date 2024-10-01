let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

export function adicionarAoCarrinho(produto){
    const nome = produto.querySelector('.h2-sub-grid').innerText;
    const preco = produto.querySelector('.p-preco').innerText;

    carrinho.push({nome, preco});
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); //Seleciona a seção onde os itens serão exibidos
    console.log(`Adicionado ao carrinho: ${nome} - ${preco}`)
}