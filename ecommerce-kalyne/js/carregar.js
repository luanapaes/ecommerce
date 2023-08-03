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