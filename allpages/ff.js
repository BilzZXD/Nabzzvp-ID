function selectOption(optionElement, price) {
    // Menghapus kelas 'selected' dari semua opsi
    var allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));

    // Menambahkan kelas 'selected' ke opsi yang dipilih
    optionElement.classList.add('selected');

    // Lakukan sesuatu dengan opsi yang dipilih, misalnya menyimpannya atau menghitung total harga
    console.log("Opsi dipilih:", optionElement.querySelector('h4').textContent, "dengan harga:", price);
}

function selectPaymentMethod(paymentElement, method) {
    // Menghapus kelas 'selected' dari semua elemen metode pembayaran
    var allPaymentMethods = document.querySelectorAll('.payment-methods li');
    allPaymentMethods.forEach(payment => payment.classList.remove('selected'));

    // Menambahkan kelas 'selected' ke elemen metode pembayaran yang dipilih
    paymentElement.classList.add('selected');

    // Lakukan sesuatu dengan metode pembayaran yang dipilih, misalnya menyimpannya atau menghitung total harga
    console.log("Metode pembayaran dipilih:", method);
}

let selectedPrice = 0;

function showProduct() {
    var paymentSection = document.getElementById('payment-section');
    paymentSection.scrollIntoView({ behavior: 'smooth' });
}

function selectOption(element, price) {
    selectedPrice = price;
    console.log("Produk dipilih dengan harga: Rp. " + price);
    updateTotalPrices();
    showProduct();
}

function selectMembershipOption(element, price) {
    selectedPrice = price;
    console.log("Membership dipilih dengan harga: Rp. " + price);
    updateTotalPrices();
    showProduct();
}

function updateTotalPrices() {
    document.getElementById('price-QRIS').innerText = "Total Harga: Rp. " + selectedPrice;
    document.getElementById('price-Dana').innerText = "Total Harga: Rp. " + selectedPrice;
    document.getElementById('price-OVO').innerText = "Total Harga: Rp. " + selectedPrice;
    document.getElementById('price-Gopay').innerText = "Total Harga: Rp. " + selectedPrice;
}

function selectPaymentMethod(element, method) {
    console.log("Metode pembayaran dipilih: " + method);
}

function selectPaymentMethod(paymentElement, method) {
    // Menghapus kelas 'selected' dari semua elemen metode pembayaran
    var allPaymentMethods = document.querySelectorAll('.payment-methods li');
    allPaymentMethods.forEach(payment => {
        payment.classList.remove('selected');
        payment.style.backgroundColor = ''; // Menghapus warna latar belakang
    });

    // Menambahkan kelas 'selected' ke elemen metode pembayaran yang dipilih
    paymentElement.classList.add('selected');

    // Memberikan efek visual saat metode pembayaran dipilih
    var backgroundColor;
    switch (method) {
        case 'QRIS':
            backgroundColor = '#f0f0f0'; // Ubah warna latar belakang untuk QRIS
            break;
        case 'Dana':
            backgroundColor = '#e2e2e2'; // Ubah warna latar belakang untuk Dana
            // Menambahkan biaya tambahan untuk metode pembayaran Dana
            break;
        case 'OVO':
            backgroundColor = '#d8d8d8'; // Ubah warna latar belakang untuk OVO
            break;
        case 'Gopay':
            backgroundColor = '#cccccc'; // Ubah warna latar belakang untuk Gopay
            break;
        default:
            backgroundColor = '#ffffff'; // Default color
    }
    paymentElement.style.backgroundColor = backgroundColor;

    // Perbarui total harga setelah memilih metode pembayaran
    updateTotalPrices();
}

document.getElementById("read-more-button").addEventListener("click", function() {
    var hiddenReviews = document.querySelectorAll(".review.hidden");
    hiddenReviews.forEach(function(review) {
        review.classList.remove("hidden");
    });
    this.style.display = "none"; // Menyembunyikan tombol setelah semua ulasan muncul
});
