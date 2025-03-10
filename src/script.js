function showMenu() {
    if(itensMenu.style.display == 'flex') {
        itensMenu.style.display = 'none';
    } else {
        itensMenu.style.display = 'flex';
    }
};

function changeBigmenu(){
    if(window.innerWidth >= 767){
        itensMenu.style.display = 'flex';
    } else {
        itensMenu.style.display = 'none';
    }
}

function hideMenu(){
    if(window.innerWidth <= 767){
        itensMenu.style.display = 'none';
    } else if (window.innerHeight <=767 && window.innerHeight < window.innerWidth){
        itensMenu.style.display = 'none';
    }
}


// MENU ATIVO

let menuItem = document.querySelectorAll('.item-menu')

function activeLink() {
    menuItem.forEach((item) => {
        item.classList.remove('ativo');
    })
    this.classList.add('ativo');
}

menuItem.forEach((item) => {
    item.addEventListener('click', activeLink);
});