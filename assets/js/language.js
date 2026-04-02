document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    //Check json file for language
    function loadLanguage(lang) {
        fetch(`assets/js/json/${lang}.json`)
            .then(response => response.json())
            .then(translation => applyLang(translation));
    }

    //When language flag is pressed
    flagButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLanguage = button.getAttribute('data-language');
            loadLanguage(selectedLanguage);
        });
    });

    //First time loading webbsite
    window.onload = () => loadLanguage('se');

    //Updates webbsite with correct translation
    function applyLang(translation){
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        const submitButton = document.getElementById('submitButton');
        if (nameField) {
            nameField.setAttribute('placeholder', translation.namePlaceholder);
        }        
        if (emailField) {
            emailField.setAttribute('placeholder', translation.emailPlaceholder);
        }
        if (messageField) {
            messageField.setAttribute('placeholder', translation.messagePlaceholder);
        }
        if (submitButton) {
            submitButton.setAttribute('value', translation.buttonText);
        }

        for (const key in translation) {
            const elements = document.querySelectorAll("." + key);
            elements.forEach(el => {
                el.innerHTML = translation[key];
            });
        }
    }

    document.querySelectorAll('.flag-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.language;

            document.body.classList.remove('lang-se', 'lang-en', 'lang-ru');
            document.body.classList.add(`lang-${lang}`);
        });
    });
});

