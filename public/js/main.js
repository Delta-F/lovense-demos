document.addEventListener('DOMContentLoaded', () => {
    const submenus = document.querySelectorAll('.submenu > span');
    
    // Initialize all submenu lists to be visible by default
    document.querySelectorAll('.submenu > ul').forEach(submenu => {
        submenu.style.display = 'block';
    });
    
    submenus.forEach(submenu => {
        // Add arrow indicator
        submenu.innerHTML += ' <span class="arrow">▼</span>';
        
        submenu.addEventListener('click', () => {
            const submenuList = submenu.nextElementSibling;
            const arrow = submenu.querySelector('.arrow');
            
            if (submenuList.style.display === 'none') {
                submenuList.style.display = 'block';
                arrow.textContent = '▼';
            } else {
                submenuList.style.display = 'none';
                arrow.textContent = '▶';
            }
        });
    });

    // Highlight active page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-section a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            
            // If active link is in submenu, ensure parent submenu is visible
            const parentSubmenu = link.closest('.submenu');
            if (parentSubmenu) {
                const submenuList = parentSubmenu.querySelector('ul');
                const arrow = parentSubmenu.querySelector('.arrow');
                submenuList.style.display = 'block';
                arrow.textContent = '▼';
            }
        }
    });
}); 