// Parallax Animation
window.addEventListener('scroll', e => {
    let position = 0;
    position = window.scrollY;
    console.log(window.scrollY);

    // initial_top Animation
    document.querySelector('.initial_top').style.transform = `translateY(${position/1.8}px)`;
    document.querySelector('.initial_top').style.opacity = `${1.7 - position/500}`;
    document.querySelector('.title').style.transform = `translateY(${position/4}px)`;

    // initial_bottom Animation
    document.querySelector('.initial_bottom').style.transform = `translateY(${2* position}px)`;
    document.querySelector('.initial_bottom').style.opacity = `${1.7 - position/500}`;

    // first_content Animation
    document.querySelector('.skills').style.transform = `translateX(${position < 1000  ? position/2 : 500}px)`;
    document.querySelector('.skills').style.opacity = `${(position < 1300 ? (position-500)/500 : (1600-position)/300)}`;

    document.querySelector('.project').style.transform = `translateX(${position < 1200  ? -position/2 : -600}px)`;
    document.querySelector('.project').style.opacity = `${(position < 1800 ? (position-500)/500 : (2200-position)/300)}`;

})

window.addEventListener('load', () => {
    document.querySelector('.title').style.opacity = "1";
});



