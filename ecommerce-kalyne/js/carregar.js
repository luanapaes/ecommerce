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