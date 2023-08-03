
function voltar() {
  window.location = 'index.html';
}


document.getElementById('link-transicao').addEventListener('click', function (event) {
  event.preventDefault();

  const targetId = this.getAttribute('href').substring(1);

  const targetElement = document.getElementById(targetId);

  targetElement.scrollIntoView({ behavior: 'smooth' });
});


const buyButtons = document.querySelectorAll(".buy-button");

function handleBuyButtonClick(event) {
  const produto = event.target.getAttribute("data-produto");

  const mensagem = `Quero o produto "${produto}". Como faço para adquiri-lo?`;

  const numeroWhatsApp = "558198661064";

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=&text=${encodeURIComponent(mensagem)}`;

  window.location.href = urlWhatsApp;
}

buyButtons.forEach(button => {
  button.addEventListener("click", handleBuyButtonClick);
});


