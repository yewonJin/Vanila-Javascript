const $page =  document.querySelector('.page');

var sliderCount = 0;

// Slider Animation Timer
window.addEventListener('load', () => {
    setInterval(() => {
        if(sliderCount === 3) sliderCount -= 4;
        [...$page.children].forEach(item => {
            item.style.backgroundColor = "";
        });
        document.querySelector('.page').children[sliderCount+1].style.backgroundColor = "white";
        document.querySelector('.image').style.transform = `translateX(${-100*++sliderCount}%)`;
    }, 5000) 
   
})

// Slider Animation Click
$page.addEventListener('click', e => {
    if(e.target.tagName !== 'LI') return;
    initialPageSetting(e);
});

function initialPageSetting(e) {
    [...$page.children].forEach((item, index) => {
        item.style.backgroundColor = "";
        if(item === e.target) {
            sliderCount = index;
            document.querySelector('.image').style.transform = `translateX(${-100*sliderCount}%)`;
        }
    })
    document.querySelector('.page').children[sliderCount].style.backgroundColor = "white";
}

// Nav-Search Animation
const $search = document.getElementById('search_icon');

$search.addEventListener('click', e => {
    if(e.target.parentNode.className === "search_li open") {
        document.querySelector('.search').classList.toggle('open');
        e.target.parentNode.classList.toggle('open');
    } else{
        setTimeout(() => {
            document.querySelector('.search').classList.toggle('open');
        }, 800);
        e.target.parentNode.classList.toggle('open');
    }
})

// Global_narrow_nav
const $menu = document.getElementById('menu');

$menu.addEventListener('click', e => {
    document.querySelector('.global_nav_menu').classList.toggle('open');
});