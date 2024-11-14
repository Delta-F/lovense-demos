let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');
const navToggle = document.createElement('button');

// Create toggle button
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '☰';
document.body.appendChild(navToggle);

// Toggle manually
navToggle.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});

// Auto-hide on scroll down, show on scroll up
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
}); 