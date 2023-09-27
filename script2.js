// Dapatkan elemen-elemen yang diperlukan
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const projectButton = document.querySelector('.project-button');
const projectsSection = document.querySelector('.projects');
const portfolioLink = document.querySelector('a[href="#portfolio"]');
const biodataLink = document.querySelector('a[href="#biodata"]');
const skillsLink = document.querySelector('a[href="#skills"]');

// Fungsi untuk menavigasi ke elemen dengan ID yang ditentukan
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Tambahkan event listener untuk tombol burger
menuToggle.addEventListener('click', () => {
    // Toggle class 'active' pada elemen navList untuk mengubah tampilan menu
    navList.classList.toggle('active');
});

// Sembunyikan menu saat salah satu tautan di menu di-klik (opsional)
const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Tambahkan event listener untuk tombol "Lihat Proyek Saya"
if (projectButton) {
    projectButton.addEventListener('click', function() {
        projectsSection.classList.toggle('hidden');
        setTimeout(() => {
            projectsSection.style.opacity = 1;
            projectsSection.style.visibility = 'visible';
        }, 100);

        // Toggle teks tombol antara "Lihat Portofolio Saya" dan "Tutup Portofolio"
        if (projectButton.textContent === 'Lihat Portofolio Saya') {
            projectButton.textContent = 'Tutup Portofolio';
        } else {
            projectButton.textContent = 'Lihat Portofolio Saya';
        }
    });
}

// Tambahkan event listener untuk menggulir ke bagian "Biodata"
if (biodataLink) {
    biodataLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToElement('biodata');
    });
}

// Tambahkan event listener untuk menggulir ke bagian "Keterampilan"
if (skillsLink) {
    skillsLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToElement('skills');
    });
}

// Tambahkan event listener untuk menggulir ke bagian "Portofolio"
if (portfolioLink) {
    portfolioLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToElement('portfolio');
    });
}
