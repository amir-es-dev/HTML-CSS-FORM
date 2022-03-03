const colors = ['yellow', 'green', 'blue', 'red', 'pink'];
const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
})