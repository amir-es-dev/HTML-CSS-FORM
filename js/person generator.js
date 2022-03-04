const submitBtn = document.querySelector('button');
const image = document.querySelector('img');
const firstName = document.querySelector('.name');
const lastName = document.querySelector('.lastName');
const location1 = document.querySelector('.location');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

submitBtn.addEventListener('click', () => {
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => {
        image.src = json.results[0].picture.medium;
        firstName.innerHTML= json.results[0].name.first;
        lastName.innerHTML =json.results[0].name.last;
        location1.innerHTML = json.results[0].location.country;
        phone.innerHTML =json.results[0].phone;
        email.innerHTML =json.results[0].email;
    })
    .catch((e) => console.log(e));
})