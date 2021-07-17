let mobileButton = document.querySelector('.mobile-menu');
let menu = document.querySelector('.home-header');

mobileButton.addEventListener('click', () => {
    menu.classList.toggle('popup-header');
});

