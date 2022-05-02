const $page =  document.querySelector('.page');

var sliderCount = 0;

window.addEventListener('load', () => {
    setInterval(() => {
        if(sliderCount === 3) sliderCount -= 4;
        [...$page.children].forEach(item => {
            item.style.backgroundColor = "";
        });
        document.querySelector('.page').children[sliderCount+1].style.backgroundColor = "grey";
        document.querySelector('.image').style.transform = `translateX(${-100*++sliderCount}%)`;
    }, 5000) 
   
})

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
    document.querySelector('.page').children[sliderCount].style.backgroundColor = "grey";
}