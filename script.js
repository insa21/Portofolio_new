// Ambil elemen-elemen yang diperlukan
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");
const navLinks = document.querySelectorAll(".nav-list li a");
const skills = document.querySelectorAll(".skill");

// Tambahkan event listener untuk mengganti tampilan menu saat tombol hamburger diklik
menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

// Sembunyikan menu saat salah satu tautan di menu diklik pada layar kecil
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navList.classList.contains("active")) {
            navList.classList.remove("active");
            menuToggle.classList.remove("open");
        }
    });
});

// Fungsi untuk menggulir ke elemen dengan efek animasi
function scrollSmoothTo(elementId) {
    const element = document.getElementById(elementId);
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop,
    });
}

// Tambahkan event listener untuk tautan menu
navList.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1); // Dapatkan ID elemen tujuan
        scrollSmoothTo(targetId);
    }
});

// Mendeteksi kapan elemen masuk dalam viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Memeriksa setiap elemen saat halaman di-scroll
window.addEventListener("scroll", () => {
    skills.forEach((skill) => {
        if (isElementInViewport(skill)) {
            skill.classList.add("in-viewport");
        }
    });

    // Tambahkan kode berikut untuk menandai tautan menu yang aktif
    navLinks.forEach((link) => {
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (section && isElementInViewport(section)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Sembunyikan menu saat layar berukuran lebih besar dari 768px
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navList.classList.remove("active");
        menuToggle.classList.remove("open");
    }
});

