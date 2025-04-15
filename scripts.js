// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Membuat tombol Toggle Mode
    const toggleButton = document.createElement('button');
    toggleButton.id = 'mode-toggle';
    toggleButton.textContent = 'Toggle Mode';
    document.body.appendChild(toggleButton);

    // Memeriksa preferensi mode yang tersimpan di localStorage
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        toggleButton.textContent = 'Dark Mode';
    } else {
        toggleButton.textContent = 'Light Mode';
    }

    // Event listener untuk toggle mode
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        toggleButton.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
        // Simpan preferensi ke localStorage
        localStorage.setItem('themeMode', isLightMode ? 'light' : 'dark');
    });

    // Gallery Image Zoom (hanya aktif di halaman gallery.html)
    const galleryImages = document.querySelectorAll('main img');
    if (galleryImages.length > 0) {
        galleryImages.forEach((img) => {
            img.addEventListener('click', () => {
                img.classList.toggle('zoomed');
                if (img.classList.contains('zoomed')) {
                    img.style.transform = 'scale(1.5)';
                    img.style.zIndex = '1000';
                } else {
                    img.style.transform = 'scale(1)';
                    img.style.zIndex = '1';
                }
            });
        });
    }

    // Blog Article Scroll Animation (hanya aktif di halaman blog.html)
    const articles = document.querySelectorAll('article');
    if (articles.length > 0) {
        const observerOptions = {
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideIn 0.5s ease-out forwards';
                }
            });
        }, observerOptions);

        articles.forEach((article) => {
            observer.observe(article);
        });
    }
});