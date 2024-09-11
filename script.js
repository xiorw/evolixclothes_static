// Gambar otomatis ganti setiap 3 detik
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextImage() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
}


setInterval(showNextImage, 3000);

// Teks otomatis ganti setiap 3 detik
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("changing-text");
    const texts = [
        "Elegance in Every Stitch.",
        "Wear Your Confidence.",
        "Where Style Meets Substance.",
        "Fashion Forward, Always.",
        "Unleash Your Inner Trendsetter."
    ];
    let index = 0;

    function changeText() {
        textElement.innerHTML = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 3000); 
});

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {  // Ketika pengguna scroll lebih dari 100px
            navbar.classList.add("scrolled");  // Tambahkan class "scrolled"
        } else {
            navbar.classList.remove("scrolled");  // Hapus class "scrolled"
        }
    });
});

let navbar = document.querySelector('.navbar');
let carousel = document.querySelector('.carousel'); 
let hideTimeout;

// Fungsi untuk menyembunyikan navbar
function hideNavbar() {

    if (!isNavbarTouchingCarousel()) {
        navbar.classList.add('navbar-hidden');
    }
}

// Fungsi untuk menampilkan navbar
function showNavbar() {
    navbar.classList.remove('navbar-hidden');
}

// Fungsi untuk mengatur waktu sembunyi setelah tidak ada interaksi
function resetHideTimeout() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideNavbar, 3000); // Sembunyikan setelah 3 detik
}

// Fungsi untuk mengecek apakah navbar sedang bersentuhan dengan carousel
function isNavbarTouchingCarousel() {
    let navbarRect = navbar.getBoundingClientRect();
    let carouselRect = carousel.getBoundingClientRect();

    // Cek apakah navbar bersentuhan dengan carousel di sumbu vertikal
    return navbarRect.bottom > carouselRect.top && navbarRect.top < carouselRect.bottom;
}

// Event listener untuk mendeteksi gerakan kursor
window.addEventListener('mousemove', () => {
    showNavbar();  // Munculkan navbar ketika kursor digerakkan
    resetHideTimeout(); // Atur waktu sembunyi
});

// Event listener untuk mendeteksi interaksi layar sentuh (mobile)
window.addEventListener('touchstart', () => {
    showNavbar();  // Munculkan navbar ketika layar disentuh
    resetHideTimeout(); // Atur waktu sembunyi
});

window.addEventListener('touchmove', () => {
    showNavbar();  // Munculkan navbar ketika layar digeser dengan jari
    resetHideTimeout(); // Atur waktu sembunyi
});

// Event listener untuk mendeteksi scroll
window.addEventListener('scroll', () => {
    showNavbar();  // Munculkan navbar ketika halaman di-scroll
    resetHideTimeout(); // Atur waktu sembunyi
});

// Inisialisasi sembunyikan navbar jika tidak ada interaksi saat memuat halaman
hideTimeout = setTimeout(hideNavbar, 3000);

// Ambil elemen tombol dan pop-up
const logoutBtn = document.getElementById('logout');
const logoutPopup = document.getElementById('logoutPopup');
const logoutYes = document.getElementById('logoutYes');
const logoutNo = document.getElementById('logoutNo');

// Ketika tombol Logout di klik, tampilkan pop-up
logoutBtn.addEventListener('click', function () {
    logoutPopup.style.display = 'flex'; // Menampilkan pop-up
});

// Jika tombol Yes di klik, kirim request POST untuk logout
logoutYes.addEventListener('click', function () {
    window.location.href = 'login.html';
});

// Jika tombol No di klik, sembunyikan pop-up
logoutNo.addEventListener('click', function () {
    logoutPopup.style.display = 'none'; // Menyembunyikan pop-up
});

//Hamburger Menu
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle('active'); // Untuk animasi hamburger
        navbarMenu.classList.toggle('active'); // Untuk menampilkan menu
    });
});