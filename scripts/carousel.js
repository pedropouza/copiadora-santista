const carousel = document.querySelector('#carousel-img');
const images = document.querySelectorAll('#carousel img')
let counter = 0

document.getElementById('nextBtn').addEventListener('click', () => {
  if (counter < images.length - 1) {
    counter++
  } else {
    counter = 0
  }
  updateSlide()
})

document.getElementById('prevBtn').addEventListener('click', () => {
  if (counter > 0) {
    counter--
  } else {
    counter = images.length - 1
  }
  updateSlide()
})

function updateSlide() {
  carousel.style.transform = `translateX(-${counter * 100}%)`;
}

setInterval(() => {
  if (counter < images.length - 1) {
    counter++
  } else {
    counter = 0
  }
  updateSlide()
}, 5000);