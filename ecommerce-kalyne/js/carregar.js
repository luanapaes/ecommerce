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

//array com todos os produtos cadastrado de todas as marcas
var todosProdutos = [];

//Criado um array para cada marca que será armazenado apenas o produto criado para a marca desejada
var cadastroNatura = [];
var cadastroOboticario = [];
var cadastroEudora = [];
var cadastroHinode = [];

//pegando o id do botão para ser criada a função ao clicar
const criarCard = document.getElementById('criarCard');

//pegando o id de cada input para conseguir extrair o valor colocado nele
const imageProduto = document.getElementById('upload-input');
const imageCarregada = document.getElementById('uploaded-image');
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const valorParcelado = document.getElementById('valor-parcelado');
const parcelas = document.getElementById('parcelas');


//criando uma função para conseguir transformar cada produtado cadstrado em um objeto
function produto(marca, imageProduto, nomeProduto, valorProduto, valorParcelado, parcelas){
  this.marca = marca;
  this.nomeProduto = nomeProduto;
  this.valorProduto = valorProduto;
  this.valorParcelado = valorParcelado;
  this.image = imageProduto;
  this.parcelas = parcelas;
};

//função que se´ra execultada ao clicar no botão (cadastrar produto)
criarCard.addEventListener('click', () => {

  //pegando a marca escolhida na hora de cadastrar o produto
  var marcaEscolhida = document.getElementById('marcaEscolhida').value;

  //pegando o conteudo digitado em cada input individualmente
  var imageProdutoCadastrado = document.querySelector('#uploaded-image').src
  const nomeProdutoCadastrado = nomeProduto.value.trim();
  const valorProdutoCadastrado = valorProduto.value.trim();
  const valorProdutoParcelado = valorParcelado.value.trim();
  const parcelaProduto = parcelas.value.trim();
  
  console.log(imageProdutoCadastrado);

  var novoProduto = new produto(marcaEscolhida, imageProdutoCadastrado, nomeProdutoCadastrado, valorProdutoCadastrado, valorProdutoParcelado, parcelaProduto)

  //fazendo a condição de acordo com a marca selecionada na hora do cadastro
  if(marcaEscolhida == "natura"){

    //adiciona o produto cadastrado ao array da marca selecionada
    cadastroNatura.push(novoProduto);

    //confere se o array tem algo
    if (cadastroNatura !== ''){

      //transforma o array em String
      localStorage.setItem('cadastroNatura', JSON.stringify(cadastroNatura));
      LimparInputs();

    }
  }
  else if (marcaEscolhida == "oboticario"){

    cadastroOboticario.push(novoProduto);

    if(cadastroOboticario !== ''){

      localStorage.setItem('cadastroOboticario', JSON.stringify(cadastroOboticario));
      LimparInputs();

    }
  }
  else if( marcaEscolhida == "eudora"){

    cadastroEudora.push(novoProduto);

    if(cadastroEudora !== ''){

      localStorage.setItem('cadastroEudora', JSON.stringify(cadastroEudora));
      LimparInputs();
    }
  }
  else if(marcaEscolhida == "hinode"){

    cadastroHinode.push(novoProduto);

    if(cadastroHinode !== ''){

      localStorage.setItem('cadastroHinode', JSON.stringify(cadastroHinode));
      LimparInputs();
    }
  }

  //adiciona ao array de todos os produtos
  todosProdutos.push(novoProduto);
  if(todosProdutos !== ''){
    localStorage.setItem('todosProdutos', JSON.stringify(todosProdutos));
    LimparInputs();
  }

  function LimparInputs(){
    imageProduto.value = '';
    imageCarregada.src = '';
    nomeProduto.value = '';
    valorProduto.value = '';
    valorParcelado.value = '';
    parcelas.value = '';
    
  }
});

function inicio(){
  window.location = 'index.html';
}