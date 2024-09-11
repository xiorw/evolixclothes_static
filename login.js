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

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const button = document.getElementById('button');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    button.addEventListener('click', function() {
        // Validasi kredensial
        if (username.value === 'Kelompok 2' && password.value === 'mk3c') {
            // Arahkan ke halaman index.blade.php
            window.location.href = 'index.html'; // Sesuaikan dengan route yang sesuai
        } else {
            // Tampilkan alert jika kredensial salah
            alert('Username atau password salah!');
        }
    });
});