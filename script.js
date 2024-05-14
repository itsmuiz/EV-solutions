console.log('start');

let down = document.querySelector('.down');
let drop = document.querySelector('.drop');

down.addEventListener('click', ()=>{
    if (drop.style.display === 'none') {
        drop.style.display = 'flex';
    } else {
        drop.style.display = 'none';
    }
});


