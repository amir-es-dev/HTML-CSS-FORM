const send = document.querySelector('.send');
const reset = document.querySelector('.reset');


send.addEventListener('click', () => {
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const message = document.querySelector('.message');

    if(!name.value || !email.value || !message.value) {
        alert('Please fill out the form');
        return;
    };
    localStorage.setItem('Name', name.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('Message', message.value);
})

reset.addEventListener('click', () => {
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const message = document.querySelector('.message');

    localStorage.removeItem('Name');
    name.value = '';
    email.value = '';
    message.value = '';
})
