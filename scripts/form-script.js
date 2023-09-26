// Efeito do Input com Label
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

// Documentos com Botao de Limpar
const inputFile = document.getElementById('attachImg')
const fileList = document.getElementById('fileList')
const resetListBtn = document.getElementById('resetListBtn')

inputFile.addEventListener('change', () => {
  const files = inputFile.files
  for (let i=0; i < files.length; i++) {
    const fileName = files[i].name
    const newLi = document.createElement('li')
    newLi.innerHTML = fileName
    fileList.append(newLi)
  }
  resetListBtn.style.display = 'block'
})

resetListBtn.addEventListener('click', () => {
  inputFile.value = ""
  const allLi = document.querySelectorAll('#fileList li')
  allLi.forEach(function(ev) {
    ev.remove()
  })
  resetListBtn.style.display = 'none'
}) 

