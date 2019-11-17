function init_dropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownContent = document.getElementsByClassName('dropdown-content')[0];
    const arrow = document.getElementsByClassName('dropdown__menu-arrow')[0];

    dropdownMenu.addEventListener('click', function () {
        dropdownContent.classList.toggle('show-dropdown');
        arrow.classList.toggle('rotate-arrow');
    });

    let dropDownHead = document.getElementById('dropdown__head');

    for (let i = 0; i < dropdownContent.childElementCount; i++) {
        dropdownContent.children[i].addEventListener('click', function (e) {
            for (let j = 0; j < dropdownContent.childElementCount; j++) {
                if (dropdownContent.children[j].getAttribute('class') === "active") {
                    dropdownContent.children[j].classList.remove('active');
                }
                let elem = e.target;
                elem.classList.add('active');
                let str = "";

                for (let k = 0; k < elem.innerHTML.length; k++) {
                    if(elem.innerHTML[k] === " " || elem.innerHTML[k] === "undefined"){
                        dropDownHead.innerHTML = str;
                        break;
                    }
                    if(k === elem.innerHTML.length - 1){
                        str+=elem.innerHTML[k];
                        dropDownHead.innerHTML = str;
                        break;
                    }
                    str+=elem.innerHTML[k];
                }
            }
        })
    }
}