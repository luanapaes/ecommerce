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

  const numeroWhatsApp = "558185624853";

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

  window.open(urlWhatsApp, "_blank");
}

function contatoWpp() {
  const mensagem = `Quero conhecer seus produtos!`;

  const numeroWhatsApp = "558185624853";

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

  window.open(urlWhatsApp, "_blank");
}

function contatoInstagram() {
  const urlInstagram = "https://www.instagram.com/kalyne_perfumaria/";
  window.open(urlInstagram, "_blank");
}

function contatoEndereco() {
  const urlEndereço = "https://www.google.com/maps/@-8.1104762,-34.9382279,3a,75y,324.98h,80.05t/data=!3m6!1e1!3m4!1sV9TZHm5E2Rb2_0pLcfZL3A!2e0!7i16384!8i8192?entry=ttu";
  window.open(urlEndereço, "_blank");
}

var $btn = document.querySelector('.enter');
$btn.addEventListener('click', () =>{
  window.location.href = 'cadastro-produtos.html';
})

function entrar() {
  window.location = 'login.html';
}

function inicio(){
  window.location = 'index.html';
}

function voltar() {
  window.location = 'index.html';
}


