const $narrow_btn = document.querySelector('.narrow_ul');

$narrow_btn.addEventListener('click', () => {
    const $narrow_menu = document.querySelector('.narrow_menu');
    $narrow_menu.classList.toggle('open');
});