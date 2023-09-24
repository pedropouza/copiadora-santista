const inputs = document.querySelectorAll('form p input, textarea, select')

inputs.forEach(function(input) {
  input.addEventListener('blur', () => {
    if (input.value !== '') {
      input.classList.add('valid')
    } else {
      input.classList.remove('valid')
    }
  });
})

