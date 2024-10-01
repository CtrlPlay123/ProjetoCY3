// Barra de pesquisa //
let boxBuscar = document.querySelector(".buscar-box");
let lupaa = document.querySelector('.lupa');
let xFechar = document.querySelector(".fechar");

lupaa.addEventListener('click',()=> {
    boxBuscar.classList.add('ativar')
})

xFechar.addEventListener("click", () => {
  boxBuscar.classList.remove("ativar");
});