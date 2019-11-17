function initQr(){
    const modal = document.getElementById('modal');
    const overlay = document.getElementsByClassName('overlay')[0];
    const showModal = document.getElementsByClassName('show-qr');
    const modalPlatform = document.getElementsByClassName('modal__platform')[0];
    const modalDescription = document.getElementsByClassName('modal__description')[0];

    for (let i = 0; i < showModal.length; i++) {
        showModal[i].addEventListener('click',function (e) {
            const elem = e.target;
            const parent = elem.parentNode;
            const parentClassAttr = parent.getAttribute('class');
            if(parentClassAttr === 'download-google__box'){
                modalPlatform.style.background = "url('./images/qr-android.svg') no-repeat";
                modalDescription.innerHTML = "Scan the QR code to go to Play Market";
            }
            if(parentClassAttr === 'download-app__box'){
                modalPlatform.style.background = "url('./images/qr-ios.svg') no-repeat";
                modalDescription.innerHTML = "Scan the QR code to go to App Store";
            }
            modal.style.display = 'flex';
            overlay.style.display = 'block';
        });
    }

    document.addEventListener('click',function (e) {
        let elem = e.target;
        if(elem.getAttribute('class') === 'overlay' || elem.getAttribute('class') === 'modal__close'){
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
}