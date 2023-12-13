// MENU

menu.addEventListener('click', () => {
    if (menu.textContent == 'close') {
        menu.textContent = 'menu'
    } else {
        menu.textContent = 'close'
    }
    nav.classList.toggle('open');
});

