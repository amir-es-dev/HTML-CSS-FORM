window.addEventListener('load', () => {

    const button = document.querySelector('button');
    const result = document.querySelector('.count');

    button.addEventListener('click', () => {

        const input = document.querySelector('input');
        const text = input.value;
        result.innerHTML = `<h1>${text.length}</h1>`;
    })
})