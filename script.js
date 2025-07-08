document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#subtitle', {
        strings: [
            "Informatics Student",
            "University of Madura '24",
            "Backend Developer Enthusiast",
            "Lifelong Learner"
        ],
        typeSpeed: 70,  // Kecepatan mengetik
        backSpeed: 40,  // Kecepatan menghapus
        loop: true,     // Mengulang animasi
        backDelay: 1500 // Jeda sebelum mulai menghapus
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Ketika elemen masuk ke dalam layar (viewport)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Animasi ter-trigger saat 10% elemen terlihat
    });

    // Ambil semua section yang ingin dianimasikan
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

});