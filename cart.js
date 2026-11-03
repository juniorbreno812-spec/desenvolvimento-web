// Recuperar carrinho salvo
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


// Salvar carrinho
function salvarCarrinho() {

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

}


// Adicionar produto
function adicionarCarrinho(id) {

    const produto = produtos.find(p => p.id === id);

    if (!produto) return;

    const item = carrinho.find(p => p.id === id);

    if (item) {

        item.quantidade++;

    } else {

        carrinho.push({
            ...produto,
            quantidade: 1
        });

    }

    salvarCarrinho();

    atualizarContador();

    alert("Produto adicionado ao carrinho!");

}


// Remover produto
function removerCarrinho(id) {

    carrinho = carrinho.filter(p => p.id !== id);

    salvarCarrinho();

    atualizarCarrinho();

}


// Diminuir quantidade
function diminuirQuantidade(id) {

    const item = carrinho.find(p => p.id === id);

    if (!item) return;

    item.quantidade--;

    if (item.quantidade <= 0) {

        removerCarrinho(id);

    } else {

        salvarCarrinho();

        atualizarCarrinho();

    }

}


// Calcular valor total
function calcularTotal() {

    return carrinho.reduce((total, produto) => {

        return total + produto.preco * produto.quantidade;

    }, 0);

}


// Atualizar contador
function atualizarContador() {

    const contador = document.getElementById("cart-count");

    if (contador) {

        contador.textContent = carrinho.reduce(
            (total, produto) => total + produto.quantidade,
            0
        );

    }

}


// Formatar valor
function formatarPreco(preco) {

    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


// Atualizar contador ao abrir página
document.addEventListener("DOMContentLoaded", () => {

    atualizarContador();

});