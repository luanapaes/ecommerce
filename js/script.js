// Seleciona todos os botões com a classe .buy-button
const buyButtons = document.querySelectorAll('.buy-button');

// Adiciona um ouvinte de evento de clique para cada botão
buyButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Função a ser executada quando um botão for clicado
    const productName = this.parentElement.querySelector('h2').innerText;
    alert('Você clicou no botão de comprar do produto: ' + productName);
  });
});
