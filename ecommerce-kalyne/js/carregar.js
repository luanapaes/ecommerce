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
function cadastrarProduto() {
  alert('foi clicado');

  var Produtos = (function (window) {
    'use strict'
    function _produto(marca, nome, valor, valorparcelado, imagem) {
      this.marca = document.getElementById('#select').value;
      this.nome = document.getElementById('#nome-produto').value;
      this.valor = document.getElementById('#valor-produto').value;
      this.valorParcelado = document.getElementById('#valor-parcelado').value;
      this.imagem = document.getElementById('#uploaded-image').src;

      // cria o card com as informações do produto cadastrado
      const novoCard = document.createElement('div');
      novoCard.classList.add('card');
      novoCard.innerHTML = `
      <img src="${imagem}" alt="">
      <h2 class="titleCard">${nome}</h2>
      <p id="preco">R$${valor}</p>
      <i>ou ${valorParcelado}</i>
      <button class="buy-button" data-produto="${nome}">Clique para comprar</button>
    `;

      const divMarca = document.querySelector(`[data-marca="${marcaSelecionada}"]`);
      if (divMarca) {
        divMarca.appendChild(novoCard);
      }

      // lista com os cards
      const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

      // Adicionar o novo card à lista 
      const newTaskText = `${nome} ${valor} ${valorParcelado} ${imagem}`;
      taskList.push(newTaskText);
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    // Adicione o event listener para a função cadastrarProduto
    document.querySelector('.btn-cadastrar').addEventListener('click', cadastrarProduto);
    return _produto;
  })(window);
  
}



