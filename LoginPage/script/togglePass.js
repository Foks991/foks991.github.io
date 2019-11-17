function init_pass() {
    const inputPass = document.getElementById('pass');
    const viewPass = document.getElementById('viewPass');

    viewPass.addEventListener('click', function () {
        if(inputPass.getAttribute('type') === 'Password'){
            inputPass.setAttribute('type','text');
            return;
        }
        if(inputPass.getAttribute('type') === 'text'){
            inputPass.setAttribute('type','Password');
        }
    });

}