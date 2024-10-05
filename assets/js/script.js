// Barra de pesquisa //
let boxBuscar = document.querySelector(".buscar-box");
let lupaa = document.querySelector('.lupa');
let xFechar = document.querySelector(".fechar");

lupaa.addEventListener('click',()=> { // Abrir a barra de pesquisa //
    boxBuscar.classList.add('ativar')
})

xFechar.addEventListener("click", () => { // Fechar a barra de pesquisa //
  boxBuscar.classList.remove("ativar");
});

// Faz isso funcionar //
let inputBusca = document.getElementById('input-busca');  // Caixa de pesquisa //
let produtos = document.querySelectorAll('.produto');     // Uma lista com os produtos da classe: .produto //

inputBusca.addEventListener('input', function(){   // Criando uma evento ao escrever //
  let valorBusca = inputBusca.value.toLowerCase(); // Oque eu escrevo, transfomado em minusculas //

  produtos.forEach(function(produto){ // O que eu entendi, que eu criei uma lista (NodeList) e o forEach vai ler essa lista //
    nomeProduto = produto.getAttribute('data-nome').toLowerCase(); 

    if (nomeProduto.includes(valorBusca)) { // Fazendo os produtos aparecer e esconder os não pesquisados //
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  })
})

// Parte dos buttons //
let botoesCategoria = document.querySelectorAll(".busca-tag");

botoesCategoria.forEach(function(botao){
  botao.addEventListener('click', function(){
    let categSelect = botao.getAttribute('data-categoria'); // Pega a categoria do botão clicado

    produtos.forEach(function(produto){
      let categProduto = produto.getAttribute("data-categoria");

      if (categProduto.toLowerCase() === categSelect.toLowerCase() || categSelect === "todos") {
        produto.style.display = "block"; // Mostra os produtos da categoria selecionada
      } else {
        produto.style.display = "none";  // Esconde os produtos que não correspondem à categoria
      }
    });
  });
});

// carrinho //

let carrinho = [];
const carrinhoElement = document.getElementById('carrinho');
const totalElement = document.getElementById('total');
const itensCarrinhoElement = document.querySelector('.itens-carrinho');


function addToCart(nome, preco) {
    const produto = { nome, preco };
    carrinho.push(produto);
    updateCarrinho();
}


function updateCarrinho() {
    itensCarrinhoElement.innerHTML = '';
    let total = 0;

    carrinho.forEach(produto => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${produto.nome} - R$${produto.preco}`;
        itensCarrinhoElement.appendChild(itemElement);
        total += parseFloat(produto.preco);
    });

    totalElement.textContent = total.toFixed(2);
}


document.querySelector('.carrinho a').addEventListener('click', () => {
    carrinhoElement.classList.toggle('active');
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const produtoElement = event.target.closest('.produto');
        const nome = produtoElement.getAttribute('data-nome');
        const preco = produtoElement.querySelector('span').textContent.replace('R$', '').replace(',', '.');

        addToCart(nome, preco);
    });
});
