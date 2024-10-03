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
      produto.style.display = "flex";
    } else {
      produto.style.display = "none";
    }
  })
})