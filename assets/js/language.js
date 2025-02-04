document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    const translations = {
        se: {
            blurb: 'AI, IT och cybersäkerhets entusiast med en passion för inlärning och problemlösning',
            started: ''
        },
        en: {
            blurb: 'AI, IT and cybersecurity enthusiast with a passion for learning and problem solving',
            started: 'Where I started'
        },
        ru: {
            blurb: 'something russian'
        }
    };

    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];

            document.getElementById('blurb').textContent = translation.blurb
        });
    });
});
