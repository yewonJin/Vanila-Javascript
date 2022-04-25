const $packman = document.querySelector('.pacman');

var [pX, pY] = [0, 0];
var deg = 0;
var scale = 1;

window.addEventListener('keydown', e => {
    if(e.key === 'ArrowUp') {
        if(pY === 0) return;
        pY -= 30;
        deg = 90;
        scale = 1;
    } else if(e.key === 'ArrowDown') {
        if(pY === 570) return;
        pY += 30;
        deg = 270;
        scale = 1;
    } else if(e.key === 'ArrowLeft') {
        deg = 0;
        scale = 1;
    } else if(e.key === 'ArrowRight') {
        deg = 0;
        scale = -1;
    } else{
        console.log("다시 입력");
    }

    $packman.style.transform = `translateY(${pY}px) rotate(${deg}deg) scaleX(${scale})`;
});

$packman.addEventListener('click', e => {
    var count = pY/60;

    if((count * 2) % 2 === 1) return; 

    if(deg !== 0) return;
    
    if(scale === 1) {
        count *= 2;
    } else if(scale === -1) {
        count *= 2;
        count += 1;
    }

    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            pX -= 20;
            e.target.style.transform = `translateX(${pX}px) rotate(${deg}deg) scaleX(${scale})`;
        }, 450)

        setTimeout(() => {
            $packman.style.setProperty('--after', 0);
        }, 500)

        setTimeout(() => {
            $packman.style.setProperty('--after', 1);
        }, 650)
    }
});