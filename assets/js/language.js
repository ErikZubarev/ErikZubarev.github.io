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
        langChangeButtons(translation)

        for (const key in translation) {
            const elements = document.querySelectorAll("." + key);
            elements.forEach(el => {
                let text = translation[key];
                
                // If element has truncation class, apply cutoff
                if (el.classList.contains("truncate-100")) {          
                    text = truncateWords(text, 100);
                }

                el.innerHTML = text;
            });
        }
    }

    function truncateWords(text) {
        limit = 50;
        const words = text.split(" ");
        let trunc = words.slice(0, limit);
        return trunc.join(" ") + "...";
    }

    function langChangeButtons(translation){
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
    }

    document.querySelectorAll('.flag-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.language;

            document.body.classList.remove('lang-se', 'lang-en', 'lang-ru');
            document.body.classList.add(`lang-${lang}`);
        });
    });
});

