const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function init()
{
    window.requestAnimationFrame(draw);
}

function draw()
{
    window.requestAnimationFrame(draw);
}

init();