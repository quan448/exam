document.addEventListener('DOMContentLoaded', () => {
    
    // --- EXTRA 1: DARK / LIGHT THEME TOGGLE MECHANISM ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check local storage setting or system default preferences
    const currentTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- EXTRA 3: HAMBURGER PANEL MORPH & OPEN ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('menu-open');
    });

    // --- EXTRA 4: CLIENT-SIDE LIVE CONTAINER FILTERING ---
    const searchInput = document.getElementById('site-search');
    const articleCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        articleCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();

            // Check if input keyword matches title or description blocks
            if (title.includes(query) || description.includes(query)) {
                card.style.display = ''; // Fallback to normal stylesheet grid style
            } else {
                card.style.display = 'none'; // Hides unmatched elements cleanly
            }
        });
    });
});
