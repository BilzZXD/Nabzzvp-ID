document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-filter, .product-filter-sim");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filterValue = button.getAttribute("data-filter");

            // Hapus kelas active dari semua tombol filter
            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            // Tambahkan kelas active pada tombol yang diklik
            button.classList.add("active");

            // Tampilkan atau sembunyikan produk sesuai dengan filter
            products.forEach((product) => {
                const category = product.getAttribute("data-category");
                if (filterValue === "all" || filterValue === category) {
                    product.style.display = "flex"; // Tampilkan produk jika sesuai dengan filter
                } else {
                    product.style.display = "none"; // Sembunyikan produk jika tidak sesuai dengan filter
                }
            });
        });
    });
});


// Fungsi untuk menampilkan pesan error spesifik
function showErrorMessage(message) {
    var errorElement = document.querySelector(".pesan-error");
    if (errorElement) {
        errorElement.innerText = message;
        errorElement.style.display = "block";
    }
}

// Fungsi untuk menyembunyikan pesan error
function hideErrorMessage() {
    var errorElement = document.querySelector(".pesan-error");
    if (errorElement) {
        errorElement.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua elemen dengan kelas "btn-filter"
    var filterButtons = document.querySelectorAll(".btn-filter");
    // Tambahkan event listener untuk setiap tombol filter
    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var kategori = button.getAttribute("data-kategori");
            filterProduk(kategori);
        });
    });

    // Event listener untuk validasi jumlah produk
    var kuantitasInputs = document.querySelectorAll(".kuantitas-produk");
    kuantitasInputs.forEach(function(input) {
        input.addEventListener("change", function() {
            var nilai = parseInt(input.value);
            var min = parseInt(input.min);
            var max = parseInt(input.max);

            if (nilai < min || isNaN(nilai)) {
                input.value = min;
                showErrorMessage("Jumlah produk minimal adalah " + min);
            } else if (nilai > max) {
                input.value = max;
                showErrorMessage("Jumlah produk maksimal adalah " + max);
            } else {
                hideErrorMessage();
            }
        });
    });

    // Event listener untuk tombol "Beli"
    var beliButtons = document.querySelectorAll(".btn-beli");
    beliButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var product = button.closest(".product");
            var productName = product.querySelector(".product-name").innerText;
            var productPriceText = product.querySelector(".product-price").innerText;
            var productPrice = parseFloat(productPriceText.replace(/[^\d.]/g, '')); // Menghapus semua karakter kecuali digit dan titik
            var productQuantity = parseInt(product.querySelector(".product-quantity").value);
            var totalHarga = (productPrice * productQuantity).toFixed(2); // Format total harga dengan dua angka di belakang koma

            // Tampilkan informasi produk di konsol
            console.log("Nama Produk:", productName);
            console.log("Harga Per Unit:", productPrice);
            console.log("Jumlah:", productQuantity);
            console.log("Total Harga:", totalHarga);
        });
    });
});

// JavaScript untuk filter produk
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-filter");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filterValue = button.getAttribute("data-filter");

            // Hapus kelas active dari semua tombol filter
            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            // Tambahkan kelas active pada tombol yang diklik
            button.classList.add("active");

            // Tampilkan atau sembunyikan produk sesuai dengan filter
            products.forEach((product) => {
                const category = product.getAttribute("data-category");
                if (filterValue === "all" || filterValue === category) {
                    product.style.display = "flex"; // Tampilkan produk jika sesuai dengan filter
                } else {
                    product.style.display = "none"; // Sembunyikan produk jika tidak sesuai dengan filter
                }
            });
        });
    });
});

// JavaScript untuk slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var slideIndicators = document.querySelector('.slide-indicators');

    // Buat titik-titik pemberitahuan untuk setiap slide
    slides.forEach(function(slide, index) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', function() {
            showSlide(index); // Tampilkan slide sesuai dengan titik pemberitahuan yang diklik
        });
        slideIndicators.appendChild(dot);
    });

    var dots = document.querySelectorAll('.dot');

    // Fungsi untuk menampilkan slide yang sesuai dengan indeks
    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.style.display = 'none'; // Sembunyikan semua slide
        });
        dots.forEach(function(dot) {
            dot.classList.remove('active'); // Hapus kelas active dari semua titik pemberitahuan
        });
        slides[index].style.display = 'block'; // Tampilkan slide yang sesuai dengan indeks
        dots[index].classList.add('active'); // Tandai titik pemberitahuan yang sesuai dengan slide yang sedang ditampilkan
    }

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(0);

    // Event listener untuk tombol "next"
    document.querySelector('.next').addEventListener('click', function() {
        var currentIndex = Array.from(slides).findIndex(function(slide) {
            return slide.style.display === 'block';
        });
        var nextIndex = (currentIndex + 1) % slides.length; // Hitung indeks slide berikutnya dengan menggunakan operasi modulus
        showSlide(nextIndex); // Tampilkan slide berikutnya
    });

    // Event listener untuk tombol "prev"
    document.querySelector('.prev').addEventListener('click', function() {
        var currentIndex = Array.from(slides).findIndex(function(slide) {
            return slide.style.display === 'block';
        });
        var prevIndex = (currentIndex - 1 + slides.length) % slides.length; // Hitung indeks slide sebelumnya dengan menggunakan operasi modulus
        showSlide(prevIndex); // Tampilkan slide sebelumnya
    });
});
const container = document.querySelector('.reviews');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    container.scrollLeft = scrollLeft - walk;
});