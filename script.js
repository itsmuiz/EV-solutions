let ham = document.querySelector('.hamburger');
let sideBar = document.querySelector('.side-bar');

ham.addEventListener('click', () => {
    if (sideBar.style.display === 'none') {
    sideBar.style.display = 'block';
    } else {
    sideBar.style.display = 'none';
    }
});