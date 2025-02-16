document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    const translations = {
        se: {
            blurb: 'AI, IT och cybersäkerhets entusiast med en passion för inlärning och problemlösning <br><a href="https://www.linkedin.com/in/erik-zubarev/" target="_blank">@LinkedIn</a>',
            arrowText: '<strong>Kontakta mig</strong>',
            AboutMeheader1: 'Om mig',
            AboutMeheader2: 'Utbildning, arbetserfarenhet och prestationer',
            thirdheader: 'Kompetenser',
            ProjectsHeader: 'Projekt',
            finalHeader: 'Hör av dig',
            AboutMeParagraph1: '<strong>Välkommen till min portföljwebbsida!</strong> Min resa inom IT började vid 14 års ålder, när min skola visade en utbildningsfilm om att välja en karriär inom spelutveckling. Då tänkte jag inte så mycket på det, men min passion för programmering tog fart senare samma år när skolan öppnade en spelutvecklingsklubb. Jag gick med utan att veta att det snart skulle ta upp hela mitt liv.',
            AboutMeParagraph2: 'Spelen som skapades under mina tre år i klubben är nu borta, men min passion för inlärning och programmering var starkt etablerad. Att skapa spel var roligt, men när jag närmade mig början av gymnasiet insåg jag att jag ville kunna mer än bara spel. Av en slump, när en vän och jag besökte Comic-Con, märkte vi en nyuppsatt monter som gjorde reklam för en gymnasieskola, LBS Kreativa Gymnasiet, som visade upp spel gjorda av sina elever och program tillgängliga på deras skola. "Kan elever som går här göra dessa saker?" - tänkte vi.',
            AboutMeParagraph3: 'Några år senare gick jag med i <strong>systemutvecklingsprogrammet på LBS</strong> (numera kallad "app- och webbutveckling"), och fördjupade min förståelse av IT. Trots att jag hade tre års programmeringserfarenhet från grundskolan insåg jag hur lite jag kunde. Jag började experimentera hemma, skapade enkla program som miniräknare och fil-läsare medan jag arbetade på webbsidor i skolan. Mina betyg blev tillslut så bra att rektorn erbjöd mig möjligheten att bli <strong>skolambassadör</strong>. Jag fick alltså delta i öppna hus, resor och samma Comic-Con-evenemang som hade inspirerat mig från början.',
            AboutMeParagraph4: 'Tack vare mitt arbete med skolambassadörerna erbjöd rektorn mig ett jobb efter examen. Jag <strong>arbetade inom IT på LBS</strong> i fyra år medan jag fortsatte mina studier vid Stockholms universitet. Jag fick alltså möjligheten att försörja mig på min passion sammtidigt som jag strävade efter att lära mig så mycket jag kunde. Trots att jag inte hade mycket fritid deltog jag ändå i fritidsaktiviteter vid universitetet, som att driva studentpuben och hjälpa utbytesstudenter, med hopp om att själv bli utbytesstudent en dag.',
            AboutMeParagraph5: 'Idag har jag en solid grund inom IT med en <strong>kandidatexamen i data- och systemvetenskap</strong>, en djup passion för AI och cybersäkerhet och en vilja att fortsätta lära mig. När jag ser mot framtiden är jag ivrig att använda mina färdigheter och erfarenheter för att bidra till innovativa och meningsfulla projekt.',
            ProjectsIntro:'<strong>I denna sektion presenterar jag de bästa projekten jag arbetat med.</strong> Här syns några av de bästa projekten jag har jobbat med som illustrerar mina kunskaper. Varje projekt länkar även till GitHub ifall du vill ha tillgång till koden',
            ProjectsProject1Header: '<a href="https://github.com/PVT-15-3/HoopUp" target="_blank">HoopUp - basketappen</a>',
            ProjectsProject1text1: 'HoopUp är ett projekt jag och sju andra personer sammarbetade på under vår utbildning på Stockholms Universitet. Med fyra designers och fyra programmerare lyckades vi skapa en innovativ app som integrerar API:er, unit testing och databaser för att kunna boka in basketspel, filtrera vem som får vara med samt ha en chatt för att kunna plannera.',
            ProjectsProject1text2: 'Jag antog scrum master rollen under projektet samt hjälpte jag till med att programmera och unit-testa. Vi använde GitHub aktivt och följde agile scrum modellen under hela projektet och slutade upp med något vi alla är otroligt stolta över. Projektet var för det mesta skrivet i Dart genom Flutter, och kan där för laddas ner på både iOS och Android',
            ServicesHeader: 'Andra tjänster',
            ServicesText: '<strong>Jag har en omfattande utbildning kring data- och systemvetenskap</strong> där jag har hunnit lära mig mycket som inte endast är programmering. Jag har även intresse - och erbjuder tjänster - för: <ul><li>AI utveckling</li><li>Cybersäkerhets konsultation</li><li>Fullstack webbutveckling</li><li>App utveckling</li><li>UI/UX/Intuitiv Design</li><li>Design för grafiker</li></ul>',
            finalEmail: 'Email',
            finalPhone: 'Telefon',
            finalAddress: 'Address',
            finalElsewhere: 'Annat',
            finalEmailForm: '<strong>Vill du ha mig på ditt team?</strong> Fyll i formuläret nedan för att skicka mig ett mejl!',
            namePlaceholder: 'Namn',
            emailPlaceholder: 'E-post',
            messagePlaceholder: 'Meddelande',
            buttonText: 'Skicka meddelande'
        },
        en: {
            blurb: 'AI, IT and cybersecurity enthusiast with a passion for learning and problem solving <br><a href="https://www.linkedin.com/in/erik-zubarev/" target="_blank">@LinkedIn</a>',
            arrowText: '<strong>Contact me</strong>',
            AboutMeheader1: 'About me',
            AboutMeheader2: 'Education, job experiences and achievements',
            thirdheader: 'Key skills',
            ProjectsHeader: 'Projects',
            finalHeader: 'Get in touch',
            AboutMeParagraph1:'<strong>Welcome to my portfolio!</strong> My journey in IT began at the age of 14, when my school showed an educational video about pursuing a career in game development. At the time, I didn&#39t think much of it, but my passion for programming truly blossomed later that year when the school set up a game-making club. I innocently joined, unaware that it would soon consume my entire life.',
            AboutMeParagraph2:'Although the games created during my three years in the club are now lost to time, my passion for learning and programming was firmly established. Making games was fun, but as I got closer to high school I started to realize I wanted more than just games. By chance, a friend and I were browsing Comic-Con when we noticed a newly set-up stall advertising a high school, LBS Kreativa Gymnasiet, showcasing games made by their students and programs available at their school. “Are students that go here able to make these things?” - we thought.',
            AboutMeParagraph3:'A few years later, I joined the <strong>software development program at LBS</strong> (nowadays called "app and web development"), furthering my understanding of IT. Despite having three years of programming experience from primary school, I realized how little I knew. I began experimenting at home, creating simple programs like calculators and file readers while working on websites at school. My grades improved so much that the principal offered me the opportunity to become a <strong>school ambassador</strong>. I participated in open houses, trips and the same Comic-Con events that had inspired me to start here.',
            AboutMeParagraph4:'Due to my work with the school embassy, I was offered a job by the principal upon graduation. I <strong>worked in IT at LBS</strong> for four years while continuing my studies at Stockholm University, making a living from my passion and striving to learn as much as I could. Despite having little free time, I still participated in extracurricular activities at university, such as managing the student bar and assisting exchange students, with the hope of becoming an exchange student myself someday.',
            AboutMeParagraph5:'Today, I stand with a solid foundation in IT, a <strong>bachelor&#39s degree in computer and data science</strong>, a deep-rooted passion for AI and cybersecurity, and a desire to continue learning. As I look to the future, I am eager to leverage my skills and experiences to contribute to innovative and impactful projects.',
            ProjectsIntro:'<strong>This sections showcases the best projects I have worked on.</strong> These are some of the best projects that illustrate my knowlage and abilities. Each project links to my GitHub if you need access to the code',
            ProjectsProject1Header: '<a href="https://github.com/PVT-15-3/HoopUp" target="_blank">HoopUp - basketball app</a>',
            ProjectsProject1text1: 'HoopUp is a project that I and seven other people collaborated on during our studies at Stockholm University. With four designers and four programmers, we managed to create an innovative app that integrates APIs, unit testing, and databases to book basketball games, filter who can join, and have a chat for planning.',
            ProjectsProject1text2: 'I assumed the role of Scrum Master during the project and also helped with programming and unit testing. We actively used GitHub and followed the Agile Scrum model throughout the project, resulting in something we are all incredibly proud of. The project was mostly written in Dart using Flutter, and can therefore be downloaded on both iOS and Android.',
            ServicesHeader: 'Other services',
            ServicesText: '<strong>I have an extensive education around computer and systems sciences</strong> where I have learned a lot of things that are not only programming. I have an interest in - and offer services for: <ul><li>AI Development</li><li>Cybersecurity consultation</li><li>Fullstack web development</li><li>App development</li><li>UI/UX/Intuitive Design</li><li>Grafics design</li></ul>',
            finalEmail: 'Email',
            finalPhone: 'Phone',
            finalAddress: 'Address',
            finalElsewhere: 'Elsewhere',
            finalEmailForm: '<strong>Want me on your team?</strong> Fill out the form below to send me an email!',
            namePlaceholder: 'Name',
            emailPlaceholder: 'Email',
            messagePlaceholder: 'Message',
            buttonText: 'Send message'
        },
        ru: {
            blurb: 'Энтузиаст ИИ, ИТ и кибербезопасности, увлеченный обучением и решением проблем <br><a href="https://www.linkedin.com/in/erik-zubarev/" target="_blank">@LinkedIn</a>',
            arrowText: '<strong>Свяжитесь со мной</strong>',
            AboutMeheader1: 'Обо мне',
            AboutMeheader2: 'Образование, опыт работы и достижения',
            thirdheader: 'Ключевые навыки',
            ProjectsHeader: 'Проекты',
            finalHeader: 'Связаться',
            AboutMeParagraph1:'<strong>Добро пожаловать в мое портфолио!</strong> Мое путешествие в ИТ началось в возрасте 14 лет, когда в школе показали образовательное видео о профессии разработчика игр. В то время я не придал этому большого значения, но моя страсть к программированию действительно расцвела позже в том же году, когда в школе организовали клуб по созданию игр. Я невинно присоединился, не зная, что это скоро поглотит всю мою жизнь.',
            AboutMeParagraph2:'Хотя игры, созданные за три года в клубе, теперь утрачены, моя страсть к обучению и программированию была прочно установлена. Создавать игры было весело, но по мере приближения к старшей школе я начал осознавать, что хочу большего, чем просто игры. Случайно, я с другом прогуливались по Comic-Con, когда мы заметили новооткрытую стойку, рекламирующую старшую школу LBS Kreativa Gymnasiet, демонстрирующую игры, созданные ее студентами, и программы, доступные в их школе. "Могут ли студенты этой школы создавать такие вещи?" - подумали мы.',
            AboutMeParagraph3:'Через несколько лет я присоединился к <strong>программе разработки программного обеспечения в LBS</strong> (сейчас это называется "разработка приложений и веб-сайтов"), углубив свои знания в области ИТ. Несмотря на три года опыта программирования в начальной школе, я понял, насколько мало знал. Я начал экспериментировать дома, создавая простые программы, такие как калькуляторы и считыватели файлов, работая над веб-сайтами в школе. Мои оценки улучшились настолько, что директор предложил мне стать <strong>послом школы</strong>. Я участвовал в днях открытых дверей, поездках и тех же мероприятиях Comic-Con, которые вдохновили меня начать здесь учиться.',
            AboutMeParagraph4:'Благодаря работе в школьной посольской службе, по окончании учебы директор предложил мне работу. Я <strong>работал в IT в LBS</strong> четыре года, продолжая учиться в Стокгольмском университете, зарабатывая на жизнь своей страстью и стремясь узнать как можно больше. Несмотря на небольшое количество свободного времени, я все же участвовал во внеклассных мероприятиях в университете, таких как управление студенческим баром и помощь иностранным студентам, надеясь однажды сам стать студентом по обмену.',
            AboutMeParagraph5:'Сегодня у меня есть прочная основа в области ИТ, <strong>степень бакалавра в области компьютерных и информационных наук</strong>, глубокая страсть к ИИ и кибербезопасности и желание продолжать учиться. Смотря в будущее, я стремлюсь использовать свои навыки и опыт для участия в инновационных и значимых проектах.',
            ProjectsIntro:'<strong>Этот раздел демонстрирует различные проекты, над которыми я работал.</strong> Это одни из лучших проектов, которые иллюстрируют мои знания и способности. Каждый проект имеет ссылку на мой GitHub, если вам нужен доступ к коду',
            ProjectsProject1Header: '<a href="https://github.com/PVT-15-3/HoopUp" target="_blank">HoopUp - баскетбольное приложение</a>',
            ProjectsProject1text1: 'HoopUp - это проект, над которым я и еще семь человек сотрудничали во время учебы в Стокгольмском университете. С четырьмя дизайнерами и четырьмя программистами нам удалось создать инновационное приложение, которое интегрирует API, модульное тестирование и базы данных для бронирования баскетбольных игр, фильтрации участников и общения для планирования.',
            ProjectsProject1text2: 'В ходе проекта я выполнял роль Скрам-мастера и также помогал с программированием и модульным тестированием. Мы активно использовали GitHub и следовали модели Agile Scrum на протяжении всего проекта, что привело к созданию чего-то, чем мы все невероятно гордимся. Проект был в основном написан на Dart с использованием Flutter, и, следовательно, его можно загрузить как на iOS, так и на Android.',
            ServicesHeader: 'Другие услуги',
            ServicesText: '<strong>У меня обширное образование в области компьютерных и информационных наук</strong>, где я узнал много вещей, которые не только программирование. У меня есть интерес к - и я предлагаю услуги в следующих областях: <ul><li>Разработка ИИ</li><li>Консультации по кибербезопасности</li><li>Fullstack веб-разработка</li><li>Разработка приложений</li><li>UI/UX/интуитивный дизайн</li><li>Графический дизайн</li></ul>',
            finalEmail: 'Э-почта',
            finalPhone: 'Телефон',
            finalAddress: 'Адрес',
            finalElsewhere: 'Другие места',
            finalEmailForm: '<strong>Хотите работать со мной?</strong> Заполните форму ниже, чтобы отправить мне письмо!',
            namePlaceholder: 'Имя',
            emailPlaceholder: 'Электронная почта',
            messagePlaceholder: 'Сообщение',
            buttonText: 'Отправить сообщение'
        }
    };

    //When language flag is pressed
    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];
            applyLang(translation);
        });
    });

    //First time loading webbsite
    window.onload = function() {
        const translation = translations['se'];
        applyLang(translation);
    }

    //Updates webbsite with correct translation
    function applyLang(translation){
        document.getElementById('name').setAttribute('placeholder', translation.namePlaceholder);
        document.getElementById('email').setAttribute('placeholder', translation.emailPlaceholder);
        document.getElementById('message').setAttribute('placeholder', translation.messagePlaceholder);
        document.getElementById('submitButton').setAttribute('value', translation.buttonText);

        for (const key in translation) {
            document.getElementById(key).innerHTML = translation[key];
        }
    }
});
