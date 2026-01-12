const sections = document.querySelectorAll('.section');

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });


    // Burger Animation
    burger.classList.toggle('toggle');
});

// Scroll Indicator Click
const scrollIndicator = document.querySelector('.scroll-indicator');
// The next section is #profil, or we could find the next sibling element of the parent section
const nextSection = document.getElementById('profil');

if (scrollIndicator && nextSection) {
    scrollIndicator.addEventListener('click', () => {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
}
