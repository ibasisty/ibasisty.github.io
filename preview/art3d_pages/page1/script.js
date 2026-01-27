const slider = document.getElementById('colorSlider');
const phoneInput = document.getElementById('phoneInput')
const phoneError = document.getElementById('phoneError');

const regex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

function updateSlider() {
  const value = slider.value;
  slider.style.background = `linear-gradient(to right, var(--decoration-1-color) ${value}%, var(--decoration-2-color) ${value}%)`;
}

updateSlider();
slider.addEventListener('input', updateSlider);

phoneInput.addEventListener('input', (event) => {
  let value = event.target.value.replace(/\D/g, '');

  if (!value.startsWith('7') && value.length > 1) {
    value = '7' + value;
  }

  phoneInput.value = value.substring(0, 11);

  let formatted = '+7';
  if (value.length > 1) {
    formatted += ' (' + value.substring(1, 4);
  }
  if (value.length >= 4) {
    formatted += ') ' + value.substring(4, 7);
  }
  if (value.length >= 7) {
    formatted += '-' + value.substring(7, 9);
  }
  if (value.length >= 9) {
    formatted += '-' + value.substring(9, 11);
  }
  
  if (regex.test(formatted)) {
    console.log('Номер телефона корректный');
    phoneError.style.display = 'none';
  }
  else {
    phoneError.style.display = 'block';
  }
  if (value.length == 0) {
    phoneError.style.display = 'none';
  }

})
