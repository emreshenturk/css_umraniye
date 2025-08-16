var img_cont = document.querySelector('.img-cont');

document.querySelector('body').addEventListener('click', function(event) {
    img_cont.innerHTML = `<img class = 'img-of' src = 'img/${event.target.id}'>`
})