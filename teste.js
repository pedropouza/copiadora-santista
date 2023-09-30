const images = document.querySelectorAll('.carousel-container img')
const prevButton = document.getElementById('prevBtn')
const nextButton = document.getElementById('nextBtn')
let currentIndex = 0

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.transform = 'translateX(0)';
    } else {
      image.style.transform = 'translateX(100%)';
    }
  })
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex)
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  showImage(currentIndex)
}

nextButton.addEventListener('click', nextImage)
prevButton.addEventListener('click', prevImage)