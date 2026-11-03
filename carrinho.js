const listaCarrinho = document.getElementById("lista-carrinho");

const valorTotal = document.getElementById("valor-total");


// Mostrar produtos do carrinho
function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";

    }

    carrinho.forEach(produto => {

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

        item.innerHTML = `

            <h3>${produto.nome}</h3>

            <p>Preço: ${formatarPreco(produto.preco)}</p>

            <p>Quantidade: ${produto.quantidade}</p>

            <p>Subtotal:
                ${formatarPreco(produto.preco * produto.quantidade)}
            </p>

            <button onclick="diminuirQuantidade(${produto.id})">
                -
            </button>

            <button onclick="adicionarCarrinho(${produto.id})">
                +
            </button>

            <button onclick="removerCarrinho(${produto.id})">
                Remover
            </button>

        `;

        listaCarrinho.appendChild(item);

    });

    valorTotal.textContent = formatarPreco(calcularTotal());

}


// Finalizar compra
function finalizarCompra() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;

    }

    alert(
        "Compra finalizada! Total: " +
        formatarPreco(calcularTotal())
    );

    carrinho = [];

    salvarCarrinho();

    atualizarCarrinho();

    atualizarContador();

}


// Atualizar ao abrir
document.addEventListener("DOMContentLoaded", () => {

    atualizarCarrinho();

});