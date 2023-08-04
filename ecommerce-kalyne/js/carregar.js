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

function cadastrarProduto() {
    const marcaSelecionada = document.getElementById('select').value;
    const nomeProduto = document.getElementById('nome-produto').value;
    const valorProduto = document.getElementById('valor-produto').value;
    const valorParcelado = document.getElementById('valor-parcelado').value;
    const imagemProduto = document.getElementById('uploaded-image').src;
  
    // cria o card com as informações do produto cadastrado
    const novoCard = document.createElement('div');
    novoCard.classList.add('card');
    novoCard.innerHTML = `
      <img src="${imagemProduto}" alt="">
      <h2 class="titleCard">${nomeProduto}</h2>
      <p id="preco">R$${valorProduto}</p>
      <i>ou ${valorParcelado}</i>
      <button class="buy-button" data-produto="${nomeProduto}">Clique para comprar</button>
    `;
  
    const divMarca = document.querySelector(`[data-marca="${marcaSelecionada}"]`);
    if (divMarca) {
      divMarca.appendChild(novoCard);
    }
  
    // Obter a lista de tarefas do localStorage ou criar uma nova lista vazia
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Adicionar o novo card à lista de tarefas
    const newTaskText = `${nomeProduto} ${valorProduto} ${valorParcelado}`;
    taskList.push(newTaskText);
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }
  
  // Adicione o event listener para a função cadastrarProduto
  document.querySelector('.btn-cadastrar').addEventListener('click', cadastrarProduto);
  