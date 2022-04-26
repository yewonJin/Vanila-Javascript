const $page =  document.querySelector('.page');

window.addEventListener('load', () => {
    setInterval(() => {
        document.querySelector('.image').style.transform = `translateX(${-905*index}px)`;
    }, 2000)
})

$page.addEventListener('click', e => {
    if(e.target.tagName !== 'LI') return;

    [...$page.children].forEach((item, index) => {
        item.style.backgroundColor = "#cccccc";

        if(item === e.target) {
            document.querySelector('.image').style.transform = `translateX(${-905*index}px)`;
        }
    })

    e.target.style.backgroundColor = "white";

});