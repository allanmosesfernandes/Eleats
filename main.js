
const juiceCircle = document.getElementById('juiceDiv');
const breakCircle = document.getElementById('breakDiv');
const juicyDiv = document.getElementById('juicyDiv');
const breakyDiv = document.getElementById('breakfast');

juiceCircle.addEventListener('click', () => {
    breakyDiv.classList.remove('showFlap');
    juicyDiv.classList.add('showFlap');
})

breakCircle.addEventListener('click', () => {
    juicyDiv.classList.remove('showFlap');
    breakyDiv.classList.add('showFlap');
})


