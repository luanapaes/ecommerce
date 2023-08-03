
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

  const numeroWhatsApp = "558186661064";

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

  window.open(urlWhatsApp, "_blank");
}


buyButtons.forEach(button => {
  button.addEventListener("click", handleBuyButtonClick);
});

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

function mascaraMoeda(campo, evento) {
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor = campo.value.replace(/[^\d]+/gi, '').reverse();
  var resultado = "";
  var mascara = "##.###.###,##".reverse();
  for (var x = 0, y = 0; x < mascara.length && y < valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}


function entrar(){
  window.location = 'login.html';
}



