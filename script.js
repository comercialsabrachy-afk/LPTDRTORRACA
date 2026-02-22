document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links li a');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Header Scroll Effect (optional: add shadow on scroll)
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            header.style.padding = '10px 0'; // shrinking effect
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            header.style.padding = '15px 0';
        }
    });

    // Simple Form Submission Handler (Prevent default)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado pelo contato! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
});