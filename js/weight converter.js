const form = document.querySelector('#my-form');
const result = document.querySelector('.result');
const error = document.querySelector('.error');
const input = document.querySelector('input');
const text = result.innerHTML;

  
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const kilogram = (input.value / 2.2).toFixed(2);
      if (kilogram > 0) {
        result.innerHTML = result.innerHTML + `  <span class='kilo'>${kilogram}</span>`;
          setTimeout(() => {
            result.innerHTML = text + '';
            input.value = '';
          }, 10000)
      }
      if (kilogram <= 0 || kilogram === NaN) {
          error.style.color = 'red';
          error.innerHTML = 'value is unvalid';
          setTimeout(() => {
            error.innerHTML = '';
            input.value = '';
          }, 2000)
      }
  })