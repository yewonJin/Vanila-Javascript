const $pacman = document.querySelector('.pacman');

var [pX, pY] = [0, 0];
var deg = 0;
var scale = 1;

// Translate the pacman
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

    $pacman.style.transform = `translateY(${pY}px) rotate(${deg}deg) scaleX(${scale})`;
});

// Remove the content


$pacman.addEventListener('click', e => {
    var count = pY/60;

    if((count * 2) % 2 === 1) return; 

    if(deg !== 0) return;
    
    if(scale === 1) {
        count *= 2;
    } else if(scale === -1) {
        count *= 2;
        count += 1;
    }

    // content
    try {
        document.querySelector('.content').children[0].children[count].classList.toggle('remove');
    } catch (error) {
        console.log("해당 컨텐트가 없습니다.");
    }

    var timerCount = 0;

    const promise = () => {
        return new Promise((resolve) => {
            const timer = setInterval(() => {
                if(timerCount > 6) {
                    clearTimeout(timer);
                    resolve();
                }
        
                setTimeout(() => {
                    pX -= 40;
                    e.target.style.transform = `translateX(${scale > 0 ? pX: -pX}px) translateY(${pY}px) rotate(${deg}deg) scaleX(${scale})`;
                }, 0)
            
                setTimeout(() => {
                    $pacman.style.setProperty('--after', 0);
                }, 300)
            
                setTimeout(() => {
                    $pacman.style.setProperty('--after', 1);
                }, 500)
        
                timerCount++;
                console.log(timerCount);


            }, 800);
        });
    }

    promise().then(() => {
        document.querySelector('.content').children[0].removeChild(document.querySelector('.content').children[0].children[count]);
        pX = 40; pY= 0;
        document.querySelector('.pacman').style.transform = `translateX(${pX}) translateY(${pY}) rotate(${deg}deg) scaleX(${scale})`
    });
        
});

