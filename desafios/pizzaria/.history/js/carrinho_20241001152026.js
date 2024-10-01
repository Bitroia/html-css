let carrinho = JSON.parse(LOCAL);

export function adicionarAoCarrinho(produto){
    const nome = produto.querySelector('.h2-sub-grid').innerText;
    const preco = produto.querySelector('.p-preco').innerText;

    carrinho.push({nome, preco});
    console.log(`Adicionado ao carrinho: ${nome} - ${preco}`)

}