let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextImage() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
}

// Ganti gambar setiap 3 detik
setInterval(showNextImage, 3000);

//Login dan Error Pop Up
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const button = document.getElementById('button');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const error = document.getElementById('errorLogin');
    const closeError = document.querySelector('.close');

    button.addEventListener('click', function() {

        if (username.value === 'Kelompok 2' && password.value === 'mk3c') {
      
            window.location.href = 'index.html'; 
        } else {

            error.style.display = 'flex';
        }
    });

   
    closeError.addEventListener('click', function() {
        error.style.display = 'none';
    });


    window.addEventListener('click', function(event) {
        if (event.target === error) {
            error.style.display = 'none';
        }
    });
});

