document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    const translations = {
        se: {
            blurb: 'AI, IT och cybersäkerhets entusiast med en passion för inlärning och problemlösning <br><a href="https://www.linkedin.com/in/erik-zubarev/" target="_blank">@LinkedIn</a>',
            arrowText: '<strong>Kontakta mig</strong>',
            firstheader1: 'Om mig',
            firstheader2: 'Utbildning, arbetserfarenhet och prestationer',
            thirdheader: 'Kompetenser',
            fourthHeader: 'Projekt',
            finalHeader: 'Hör av dig',
            firstParagraph1: '<strong>Välkommen till min portföljwebbsida!</strong> Min resa inom IT började vid 14 års ålder, när min skola visade en utbildningsfilm om att välja en karriär inom spelutveckling. Då tänkte inte jag så mycket på det, men min passion för programmering tog fart senare samma år när skolan öppnade en spelutvecklingsklubb. Jag gick med utan att veta att det snart skulle ta upp hela mitt liv.',
            firstParagraph2: 'Spelen som skapades under mina tre år i klubben är nu borta, men min passion för inlärning och programmering var starkt etablerad. Att skapa spel var roligt, men när jag närmade mig början av gymnasiet insåg jag att jag ville kunna mer än bara spel. Av en slump, när en vän och jag besökte Comic-Con, märkte vi en nyuppsatt monter som gjorde reklam för en gymnasieskola, LBS Kreativa Gymnasiet, som visade upp spel gjorda av sina elever och program tillgängliga på deras skola. "Kan elever som går här göra dessa saker?" - tänkte vi.',
            firstParagraph3: 'Några år senare gick jag med i <strong>systemutvecklingsprogrammet på LBS</strong> (numera kallad "app- och webbutveckling"), och fördjupade min förståelse av IT. Trots att jag hade tre års programmeringserfarenhet från grundskolan insåg jag hur lite jag kunde. Jag började experimentera hemma, skapade enkla program som miniräknare och fil-läsare medan jag arbetade på webbsidor i skolan. Mina betyg blev tillslut så bra att rektorn erbjöd mig möjligheten att bli <strong>skolambassadör</strong>. Jag fick alltså delta i öppna hus, resor och samma Comic-Con-evenemang som hade inspirerat mig från början.',
            firstParagraph4: 'Tack vare mitt arbete med skolambassadörerna erbjöd rektorn mig ett jobb efter examen. Jag <strong>arbetade inom IT på LBS</strong> i fyra år medan jag fortsatte mina studier vid Stockholms universitet. Jag fick alltså möjligheten att försärja mig på min passion sammtidigt som jag strävade efter att lära mig så mycket jag kunde. Trots att jag inte hade mycket fritid deltog jag ändå i fritidsaktiviteter vid universitetet, som att driva studentpuben och hjälpa utbytesstudenter, med hopp om att själv bli utbytesstudent en dag.',
            firstParagraph5: 'Idag har jag grundat mig inom IT med en <strong>kandidatexamen i data- och systemvetenskap</strong>, en djup passion för AI och cybersäkerhet och en vilja att fortsätta lära mig. När jag ser mot framtiden är jag ivrig att använda mina färdigheter och erfarenheter för att bidra till innovativa och meningsfulla projekt.',
            fourthIntro:'<strong>I denna sektion presenterar jag en samling av mina arbeten inom IT-området.</strong> Här syns några av de bästa projekten jag har jobbat med som illustrerar mina kunskaper. Varje projekt länkar även till GitHub ifall du vill ha tillgång till koden',
            fourthProject1Header: '<a href="https://github.com/PVT-15-3/HoopUp" target="_blank">HoopUp - basketappen</a>',
            fourthProject1text1: 'HoopUp är ett projekt jag och sju andra personer sammarbetade på under vår utbildning på Stockholms Universitet. Med fyra designers och fyra programmerare lyckades vi skapa en innovativ app som integrerar API:er, unit testing och databaser för att kunna boka in basketspel, filtrera vem som får vara med samt ha en chatt för att kunna plannera.',
            fourthProject1text2: 'Jag antog scrum master rollen under projektet samt hjälpte jag till med att programmera och unit-testa. Vi använde GitHub aktivt och följde agile scrum modellen under hela projektet och slutade upp med något vi alla är otroligt stolta över. Projektet var för det mesta skrivet i Dart genom Flutter, och kan där för laddas ner på både iOS och Android',
            fourthProject2Header: '',
            fourthProject2text: '',
            fourthProject3Header: '',
            fourthProject3text: '',
            finalEmail: 'Email',
            finalPhone: 'Telefon',
            finalAddress: 'Address',
            finalElsewhere: 'Annat',
            finalEmailForm: '<strong>Här kan du mejla!</strong> Fyll i formuläret nedan för att skicka ett mejl till mig',
            namePlaceholder: 'Namn',
            emailPlaceholder: 'E-post',
            messagePlaceholder: 'Meddelande',
            buttonText: 'Skicka meddelande'
        },
        en: {
            blurb: 'AI, IT and cybersecurity enthusiast with a passion for learning and problem solving <br><a href="https://www.linkedin.com/in/erik-zubarev/" target="_blank">@LinkedIn</a>',
            arrowText: '<strong>Contact me</strong>',
            firstheader1: 'About me',
            firstheader2: 'Education, job experiences and achievements',
            thirdheader: 'Key skills',
            fourthHeader: 'Projects',
            finalHeader: 'Get in touch',
            firstParagraph1:'<strong>Welcome to my portfolio!</strong> My journey in IT began at the age of 14, when my school showed an educational video about pursuing a career in game development. At the time, I didn&#39t think much of it, but my passion for programming truly blossomed later that year when the school set up a game-making club. I innocently joined, unaware that it would soon consume my entire life.',
            firstParagraph2:'Although the games created during my three years in the club are now lost to time, my passion for learning and programming was firmly established. Making games was fun, but as I got closer to high school I started to realize I wanted more than just games. By chance, a friend and I were browsing Comic-Con when we noticed a newly set-up stall advertising a high school, LBS Kreativa Gymnasiet, showcasing games made by their students and programs available at their school. “Are students that go here able to make these things?” - we thought.',
            firstParagraph3:'A few years later, I joined the <strong>software development program at LBS</strong> (nowadays called "app and web development"), furthering my understanding of IT. Despite having three years of programming experience from primary school, I realized how little I knew. I began experimenting at home, creating simple programs like calculators and file readers while working on websites at school. My grades improved so much that the principal offered me the opportunity to become a <strong>school ambassador</strong>. I participated in open houses, trips and the same Comic-Con events that had inspired me to start here.',
            firstParagraph4:'Due to my work with the school embassy, I was offered a job by the principal upon graduation. I <strong>worked in IT at LBS</strong> for four years while continuing my studies at Stockholm University, making a living from my passion and striving to learn as much as I could. Despite having little free time, I still participated in extracurricular activities at university, such as managing the student bar and assisting exchange students, with the hope of becoming an exchange student myself someday.',
            firstParagraph5:'Today, I stand with a solid foundation in IT, a <strong>bachelor&#39s degree in computer and data science</strong>, a deep-rooted passion for AI and cybersecurity, and a desire to continue learning. As I look to the future, I am eager to leverage my skills and experiences to contribute to innovative and impactful projects.',
            fourthIntro:'<strong>This sections showcases the different projects I have worked on.</strong> These are some of the best projects that illustrate my knowlage and abilities. Each project links to my GitHub if you need access to the code',
            fourthProject1Header: '<a href="https://github.com/PVT-15-3/HoopUp" target="_blank">HoopUp - basketball app</a>',
            fourthProject1text1: 'HoopUp is a project that I and seven other people collaborated on during our studies at Stockholm University. With four designers and four programmers, we managed to create an innovative app that integrates APIs, unit testing, and databases to book basketball games, filter who can join, and have a chat for planning.',
            fourthProject1text2: 'I took on the role of Scrum Master during the project and also helped with programming and unit testing. We actively used GitHub and followed the Agile Scrum model throughout the project, resulting in something we are all incredibly proud of. The project was mostly written in Dart using Flutter, and can therefore be downloaded on both iOS and Android.',
            fourthProject2Header: '',
            fourthProject2text: '',
            fourthProject3Header: '',
            fourthProject3text: '',
            finalEmail: 'Email',
            finalPhone: 'Phone',
            finalAddress: 'Address',
            finalElsewhere: 'Elsewhere',
            finalEmailForm: '<strong>Consider mailing!</strong> Fill out the form below to send me an email',
            namePlaceholder: 'Name',
            emailPlaceholder: 'Email',
            messagePlaceholder: 'Message',
            buttonText: 'Send message'
        },
        ru: {
            blurb: '',
            arrowText: '<strong></strong>',
            firstheader1: '',
            firstheader2:'',
            thirdheader: '',
            fourthHeader: '',
            finalHeader:'',
            firstParagraph1:'',
            firstParagraph2:'',
            firstParagraph3:'',
            firstParagraph4:'',
            firstParagraph5:'',
            fourthIntro:'',
            fourthProject1Header: '',
            fourthProject1text1: '',
            fourthProject1text2: '',
            fourthProject2Header: '',
            fourthProject2text: '',
            fourthProject3Header: '',
            fourthProject3text: '',
            finalEmail: '',
            finalPhone: '',
            finalAddress: '',
            finalElsewhere: '',
            finalEmailForm: '',
            namePlaceholder: '',
            emailPlaceholder: '',
            messagePlaceholder: '',
            buttonText: ''
        }
    };

    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];
            
            document.getElementById('finalEmailForm').innerHTML = translation.finalEmailForm;
            document.getElementById('name').setAttribute('placeholder', translation.namePlaceholder);
            document.getElementById('email').setAttribute('placeholder', translation.emailPlaceholder);
            document.getElementById('message').setAttribute('placeholder', translation.messagePlaceholder);
            document.getElementById('submitButton').setAttribute('value', translation.buttonText);
            
            for (const key in translation) {
                document.getElementById(key).innerHTML = translation[key];
            }
        });
    });

    window.onload = function() {
        const translation = translations['se'];

        document.getElementById('finalEmailForm').innerHTML = translation.finalEmailForm;
        document.getElementById('name').setAttribute('placeholder', translation.namePlaceholder);
        document.getElementById('email').setAttribute('placeholder', translation.emailPlaceholder);
        document.getElementById('message').setAttribute('placeholder', translation.messagePlaceholder);
        document.getElementById('submitButton').setAttribute('value', translation.buttonText);

        for (const key in translation) {
            document.getElementById(key).innerHTML = translation[key];
        }


    }
});
