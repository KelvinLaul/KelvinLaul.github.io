document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    const serviceButtons = document.querySelectorAll('.service-button');

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const description = button.nextElementSibling;
            const icon = button.querySelector('.service-icon');

            // Toggle the description display
            if (description.style.display === 'block') {
                description.style.display = 'none';
                icon.textContent = '+';
            } else {
                description.style.display = 'block';
                description.style.overflow = 'hidden'; // Make sure overflow is controlled
                icon.textContent = '-';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');

            // Toggle the answer display
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });
});
