function init_errorMessage() {
    const errorMessage = document.getElementById('error');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function () {
        errorMessage.style.display = 'flex';
    })
}