const uploadInput = document.getElementById('upload-input');
const uploadedImage = document.getElementById('uploaded-image');

uploadInput.addEventListener('change', function () {
  const file = uploadInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      uploadedImage.src = reader.result;
    };

    reader.readAsDataURL(file);
  }
});

function formatarMoeda(input) {
  let valor = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  valor = (valor / 100).toFixed(2); // Divide por 100 e formata para 2 casas decimais

  input.value = `${valor.replace(".", ",")}`; // Adiciona "R$" e substitui o ponto por vírgula
}

//-----------------------------------------------------------------------
//CADASTRO PRODUTOS
var arrProdutos = [];

function criarCard() {
  var nome = document.querySelector('#nome-produto').value;
  var valor = document.querySelector('#valor-produto').value;
  var valorParcelado = document.querySelector('#valor-parcelado').value;
  var marcaSelecionada = document.querySelector('#select').value;
  var imagemProduto = document.querySelector('#uploaded-image').src;

  function Produto(nome, valor, marcaSelecionada, valorParcelado, imagemProduto) {
    this.nome = nome;
    this.valor = valor;
    this.marcaSelecionada = marcaSelecionada;
    this.valorParcelado = valorParcelado;
    this.imagemProduto = imagemProduto;
  }

  var novoProduto = new Produto(nome, valor, marcaSelecionada, valorParcelado, imagemProduto);
  arrProdutos.push(novoProduto);

  const cardContainer = document.getElementById('cardContainer');
  const novoCard = document.createElement('div');
  novoCard.classList.add('card');
  novoCard.innerHTML = `
        <img src="${novoProduto.imagemProduto}">
        <h2 class="titleCard">${novoProduto.nome}</h2>
        <p id="preco">R$${novoProduto.valor}</p>
        <i>ou ${novoProduto.valorParcelado}</i>
        <button class="buy-button" data-produto="${novoProduto.nome}">Clique para comprar</button>
    `;
  const divMarca = document.querySelector(`[data-marca="${marcaSelecionada}"]`);
  if (divMarca) {
    divMarca.innerHTML = ''; // Limpar o conteúdo atual da div
    divMarca.appendChild(novoCard);
  }

  // lista com os cards
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  
  // Adicionar o novo card à lista 
  const newTaskText = `${nome} ${valor} ${valorParcelado} ${imagemProduto}`;
  taskList.push(newTaskText);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  
  // Adicione o event listener para a função cadastrarProduto
  document.querySelector('.btn-cadastrar').addEventListener('click', criarCard);

}




