// JavaScript animation: Move the box left and right on button click (kept from previous version)
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');

if (animateBtn && box) {
    animateBtn.addEventListener('click', () => {
        let position = 0;
        let direction = 1; // 1 means moving right, -1 means moving left
        const maxPosition = 200; // max pixels to move right

        const interval = setInterval(() => {
            position += direction * 5;
            box.style.transform = `translateX(${position}px)`;

            if (position >= maxPosition) {
                direction = -1;
            } else if (position <= 0) {
                direction = 1;
            }
        }, 30);

        // Stop animation after 4 seconds
        setTimeout(() => {
            clearInterval(interval);
            box.style.transform = 'translateX(0)';
        }, 4000);
    });
}

// Cookie Consent Logic
document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    } else {
        cookieConsent.style.display = 'none';
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Here you could add form validation or send data to a server

        // Show thank you message
        formMessage.style.display = 'block';

        // Reset form fields
        contactForm.reset();
    });

    // Add mouse interaction animations on sections
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('mousemove', (e) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            const maxRotate = 10; // degrees

            section.style.transform = `perspective(500px) rotateX(${-deltaY * maxRotate}deg) rotateY(${deltaX * maxRotate}deg) scale(1.05)`;
            section.style.transition = 'transform 0.1s ease';
            section.style.zIndex = 10;
            section.style.boxShadow = '0 20px 40px rgba(255, 220, 0, 0.7)';
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = '';
            section.style.transition = 'transform 0.5s ease';
            section.style.zIndex = '';
            section.style.boxShadow = '0 8px 20px rgba(255, 220, 0, 0.3)';
        });
    });
});
