const greyBtn = document.querySelector('.greyBtn');
const whiteBtn = document.querySelector('.whiteBtn');
const blueBtn = document.querySelector('.blueBtn');
const yellowBtn = document.querySelector('.yellowBtn');

greyBtn.addEventListener('click',() => {
    document.body.style.backgroundColor = 'grey'
})
whiteBtn.addEventListener('click',() => {
    document.body.style.backgroundColor = 'white'
})
blueBtn.addEventListener('click',() => {
    document.body.style.backgroundColor = 'blue'
})
yellowBtn.addEventListener('click',() => {
    document.body.style.backgroundColor = 'yellow'
})



//Code ostad

// const buttons = document.querySelectorAll('.buttons');

// buttons.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         document.body.style.backgroundColor = e.target.id;
//     })
// })