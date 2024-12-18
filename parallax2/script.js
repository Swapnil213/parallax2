let text = document.getElementById('text');
let burj = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.left = value * -2 + 'px';
    burj.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
});
