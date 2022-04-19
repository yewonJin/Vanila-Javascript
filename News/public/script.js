const $narrow_btn = document.querySelector('.narrow_ul');

$narrow_btn.addEventListener('click', () => {
    const $narrow_menu = document.querySelector('.narrow_menu');
    $narrow_menu.classList.toggle('open');
});

// 브라우저 로딩되었을 때 board의 자식 표시, 나머지는 다 display: none 상태
window.addEventListener('load', () => {
    for(let i = 1; i < 4; i++) {
        $board.children[i].style.display = "inline-block";
    }
})

// main_section > board 애니메이션
const $next_btn = document.querySelector('.arrow.next');
const $back_btn = document.querySelector('.arrow.back');
const $board = document.querySelector('.board');

$next_btn.addEventListener('click', () => {
    setTimeout(() => {
        $board.children[1].style.opacity = "0";
    }, 100);

    setTimeout(() => {
        $board.children[4].style.display = 'inline-block'
        $board.children[1].style.display = 'none';
        $board.children[4].style.opacity = "0";
    }, 300);

    setTimeout(() => {
        $board.children[4].style.opacity = "1";
    }, 600);
});

$back_btn.addEventListener('click', () => {
    $board.children[1].style.display = 'inline-block';
    $board.children[4].style.display = 'none'
});

