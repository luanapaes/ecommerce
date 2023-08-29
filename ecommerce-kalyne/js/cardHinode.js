let cadastroHinode = JSON.parse(localStorage.getItem('cadastroHinode'));

if(cadastroHinode){

    //laço de repetição para arrays onde consigo pegar exatamente as informações de cada objeto armazenado nela
    cadastroHinode.forEach(element => {
        
        //criando uma div para virar o novo card
        var novoCard = document.createElement('div');
        novoCard.classList.add('card');

        //id da div pai onde vai se colocado a div filha dentro
        var marca = document.querySelector('#marca-hinode');

        //sintaxe do que vai ter dentro da div que irei criar
        novoCard.innerHTML = `
        <img src="${element.image}">
        <h2 class="titleCard">${element.nomeProduto}</h2>
        <p id="preco">R$${element.valorProduto}</p>
        <i>ou ${element.parcelas}x de ${element.valorParcelado}</i>
        <button class="buy-button" data-produto="${element.nomeProduto}" onclick="handleBuyButtonClick(event)">Clique para comprar</button>
        `;

        //adicionando tudo ao html
        marca.appendChild(novoCard);

        //testes feito antes para saber se o script estava funcionando :)
        console.log(element.image);
        console.log(element.nomeProduto);
        console.log(element.valorProduto);
        console.log(element.valorParcelado)    
    });

}