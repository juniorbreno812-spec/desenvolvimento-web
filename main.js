const productList = document.getElementById("product-list");

const searchInput = document.getElementById("search");

const filterButtons = document.querySelectorAll(".filter-btn");

let categoriaAtual = "Todos";


// Formatar preço
function formatarPreco(preco) {

    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


// Mostrar produtos
function mostrarProdutos(lista) {

    productList.innerHTML = "";

    if (lista.length === 0) {

        productList.innerHTML = "<p>Nenhum produto encontrado.</p>";

        return;

    }

    lista.forEach(produto => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `

            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="product-info">

                <span>${produto.categoria}</span>

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <h4>${formatarPreco(produto.preco)}</h4>

                <button onclick="adicionarCarrinho(${produto.id})">
                    Adicionar ao carrinho
                </button>

            </div>

        `;

        productList.appendChild(card);

    });

}


// Buscar e filtrar produtos
function filtrarProdutos() {

    const busca = searchInput.value.toLowerCase();

    const resultado = produtos.filter(produto => {

        const correspondeCategoria =
            categoriaAtual === "Todos" ||
            produto.categoria === categoriaAtual;

        const correspondeBusca =
            produto.nome.toLowerCase().includes(busca);

        return correspondeCategoria && correspondeBusca;

    });

    mostrarProdutos(resultado);

}


// Eventos dos filtros
filterButtons.forEach(botao => {

    botao.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        botao.classList.add("active");

        categoriaAtual = botao.dataset.category;

        filtrarProdutos();

    });

});


// Evento de busca
searchInput.addEventListener("input", filtrarProdutos);


// Mostrar catálogo ao abrir
mostrarProdutos(produtos);