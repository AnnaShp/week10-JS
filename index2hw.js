let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.btn-nxt').addEventListener('click', function () {
    offset = offset + 500;
    if (offset > 1500) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.btn-prv').addEventListener('click', function () {
    offset = offset - 500;
    if (offset < 0) {
        offset = 1500;
    }
    sliderLine.style.left = -offset + 'px';
});

