document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

       const translations = {
       se: {
           blurb: 'AI, IT och cybersäkerhets entusiast med en passion för att lära mig nya saker och problemlösning <br><a href="https://www.linkedin.com/in/erik-zubarev/" target="_blank">@LinkedIn</a>',
           arrowText: '<strong>Kontakta mig</strong>',
           AboutMeheader1: 'Om mig',
           thirdheader: 'Kompetenser',
           ProjectsHeader: 'Projekt',
           finalHeader: 'Hör av dig',
           AboutMeParagraph1: '<strong>Välkommen till min portfölj!</strong> Jag heter Erik, jag har pluggat många olika områden inom IT sedan jag var 14 och är just nu väldigt intresserad av AI och säkerhet. Jag har en kandidatexamen i Data- och Systemvetenskap och siktar på att fortsätta mot en masterexamen i maskininlärning. Jag har även lite kunskaper i grafisk design, webbutveckling och spelutveckling. ',
           AboutMeParagraph2: 'Jag började faktiskt med spelutveckling när jag gick med en spelutvecklingsklubb på skolan när jag var 14. Detta var första gången jag hade gjort något så stort, och även fast spelen jag skapade inte var särskilt bra, kommer jag fortfarande ihåg hur skönt det kändes att äntligen bli klar med ett projekt jag hade arbetat på under ett helt år. Mer än så kommer jag ihåg hur kul det var att stanna efter skolan och under sommaren för att vara med mina kamrater och bara knappa på datorn.',
           AboutMeParagraph3: 'När jag började gymnasiet valde jag teknikprogrammet <strong>systemutveckling</strong> och var överraskad över hur lite jag faktiskt kunde. Det var här jag verkligen tog min utbildning mer seriöst. Så seriöst att jag fick slut på saker att göra så fokuserade istället på flera andra aktiviteter som var tillgängliga på skolan. Jag startade flera klubbar, jag var medlem i <strong>studentkåren</strong>, jag representerade skolan som en <strong>ambassadör</strong> och jag var även <strong>ordförande för elevrådet</strong>. Jag tog examen med starka betyg och, ironiskt nog, var det precis då jag insåg att jag älskade att lära mig nya saker.',
           AboutMeParagraph4: 'Direkt efter gymnasiet kom jag in på <strong>Data- och Systemvetenskap</strong> programmet på Stockholms Universitet. Samtidigt, tack vare att jag var så aktiv under skolans gång, erbjöd rektorn mig ett jobb som <strong>IT-Tekniker</strong> på mitt gamla gymnasium. Jag hade aldrig mycket fritid, men trots det lyckades jag ändå delta i aktiviteter på universitetet, ta hand om studentpuben, ta hand om utbytesstudenter och till och med hitta min nuvarande sambo. Jag arbetade som IT-Tekniker i fyra år och har, som nämnt tidigare, även en <strong>kandidatexamen</strong>.',
           AboutMeParagraph5: 'Jag har även arbetat som elevassistent i ett år. Detta var en ytterligare arbetsuppgift jag fick från jobbet där jag hjälper elever med olika svårigheter med deras uppgifter i matematik och programmering, bland andra kurser. Här fick jag lära mig hur man agerar pedagogiskt, hur viktig tålamod och respekt är och hur man hjälper personer med inlärningssvårigheter.',
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
           thirdheader: 'Key skills',
           ProjectsHeader: 'Projects',
           finalHeader: 'Get in touch',
           AboutMeParagraph1:'<strong>Welcome to my portfolio!</strong> My name is Erik, I have studied many different areas within IT since I was 14 and I am currently very interested in AI and security. I have a bachelor&#39s degree in Computer and Systems Sciences and aim to continue towards a master&#39s degree in Machine Learning. I also have some knowledge in graphic design, web development, and game development.',
           AboutMeParagraph2:'I actually started with game development when I joined a game development club at school when I was 14. This was the first time I had done something so big, and even though the games I created weren’t particularly good, I still remember how satisfying it felt to finally complete a project I had worked on for an entire year. More than that, I remember how fun it was to stay after school and during the summer to be with my friends and just tinker away on the computer.',
           AboutMeParagraph3:'When I started high school, I chose the program <strong>systems development</strong> and was surprised at how little I actually knew. It was here that I really started taking my education more seriously. So seriously that I ran out of things to do and instead focused on several other activities available at the school. I started several clubs, was a member of the <strong>student union</strong>, represented the school as an <strong>ambassador</strong>, and was also the <strong>president of the student council</strong>. I graduated with good grades and, ironically enough, it was precisely then that I realized I loved learning new things.',
           AboutMeParagraph4:'Right after high school, I was accepted into the <strong>Computer and Systems Sciences</strong> program at Stockholm University. At the same time, thanks to my active involvement during high school, the principal offered me a job as an <strong>IT Technician</strong>. I never had much free time, but despite that, I still managed to participate in university activities, take care of the student pub, support exchange students, and even meet my current partner. I worked as an IT Technician for four years and, as previously mentioned, also hold a <strong>bachelor&#39s degree</strong>.',
           AboutMeParagraph5:'I have also worked as a student assistant for a year. This was an additional task I took on at my job, where I helped students with various difficulties in their assignments in mathematics and programming, among other subjects. Here, I learned how to act pedagogically, how important patience and respect are, and how to support individuals with learning difficulties.',
           ProjectsIntro:'<strong>This section showcases the best projects I have worked on.</strong> These are some of the best projects that illustrate my knowledge and abilities. Each project links to my GitHub if you need access to the code',
           ProjectsProject1Header: '<a href="https://github.com/PVT-15-3/HoopUp" target="_blank">HoopUp - basketball app</a>',
           ProjectsProject1text1: 'HoopUp is a project that I and seven other people collaborated on during our studies at Stockholm University. With four designers and four programmers, we managed to create an innovative app that integrates APIs, unit testing, and databases to book basketball games, filter who can join, and have a chat for planning.',
           ProjectsProject1text2: 'I assumed the role of Scrum Master during the project and also helped with programming and unit testing. We actively used GitHub and followed the Agile Scrum model throughout the project, resulting in something we are all incredibly proud of. The project was mostly written in Dart using Flutter, and can therefore be downloaded on both iOS and Android.',
           ServicesHeader: 'Other services',
           ServicesText: '<strong>I have an extensive education around computer and systems sciences</strong> where I have learned a lot of things that are not only programming. I have an interest in - and offer services for: <ul><li>AI Development</li><li>Cybersecurity consultation</li><li>Fullstack web development</li><li>App development</li><li>UI/UX/Intuitive Design</li><li>Graphics design</li></ul>',
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
           thirdheader: 'Ключевые навыки',
           ProjectsHeader: 'Проекты',
           finalHeader: 'Связаться',
           AboutMeParagraph1:'<strong>Добро пожаловать в мое портфолио!</strong> Меня зовут Эрик, я изучал многие различные области в IT с 14 лет и в настоящее время очень интересуюсь искусственным интеллектом и безопасностью. У меня степень бакалавра в области компьютерных и системных наук, и я стремлюсь продолжить обучение в магистратуре по машинному обучению. Я также имею некоторые знания в графическом дизайне, веб-разработке и разработке игр.',
           AboutMeParagraph2:'Я фактически начал заниматься разработкой игр, когда вступил в клуб по разработке игр в школе в 14 лет. Это был первый раз, когда я сделал что-то столь масштабное, и хотя созданные мной игры не были особенно хорошими, я до сих пор помню, какое удовольствие я испытал, когда наконец завершил проект, над которым работал целый год. Более того, я помню, как весело было оставаться после школы и летом, чтобы проводить время с друзьями и просто работать за компьютером.',
           AboutMeParagraph3:'Когда я поступил в старшую школу, я выбрал технологическую программу <strong>разработка систем</strong> и был удивлён, насколько мало я на самом деле знал. Именно здесь я начал относиться к своему образованию более серьёзно. Настолько серьёзно, что у меня закончились дела, и я сосредоточился на нескольких других мероприятиях, доступных в школе. Я основал несколько клубов, был членом <strong>студенческого союза</strong>, представлял школу как <strong>амбассадор</strong>, а также был <strong>председателем студенческого совета</strong>. Я окончил школу с высокими оценками и, как ни странно, именно тогда я осознал, что люблю узнавать новые вещи.',
           AboutMeParagraph4:'Сразу после окончания школы я поступил в программу <strong>Компьютерные и системные науки</strong> в Стокгольмском университете. В то же время, благодаря моей активной деятельности во время обучения, директор предложил мне работу <strong>IT-техником</strong> в моей старой школе. У меня никогда не было много свободного времени, но, несмотря на это, я всё же сумел участвовать в мероприятиях университета, заниматься студенческим пабом, помогать студентам по обмену и даже встретить моего нынешнего партнёра. Я работал IT-техником четыре года и, как уже упоминалось, также имею <strong>степень бакалавра</strong>.',
           AboutMeParagraph5:'Я также работал ассистентом ученика в течение года. Это была дополнительная рабочая задача, которую я выполнял на своей работе, помогая ученикам с различными трудностями в их заданиях по математике и программированию, а также по другим предметам. Здесь я научился педагогическому подходу, понял, насколько важны терпение и уважение, и узнал, как помогать людям с трудностями в обучении.',
           ProjectsIntro:'<strong>Этот раздел демонстрирует различные проекты, над которыми я работал.</strong> Это одни из лучших проектов, которые иллюстрируют мои знания и способности. Каждый проект имеет ссылку на мой GitHub, если вам нужен доступ к коду',
           ProjectsProject1Header: '<a href="https://github.com/PVT-15-3/HoopUp" target="_blank">HoopUp - баскетбольное приложение</a>',
           ProjectsProject1text1: 'HoopUp - это проект, над которым я и еще семь человек сотрудничали во время учебы в Стокгольмском университете. С четырьмя дизайнерами и четырьмя программистами нам удалось создать инновационное приложение, которое интегрирует API, модульное тестирование и базы данных для бронирования баскетбольных игр, фильтрации участников и общения для планирования.',
           ProjectsProject1text2: 'В ходе проекта я выполнял роль Скрам-мастера и также помогал с программированием и Unit Testing. Мы активно использовали GitHub и следовали модели Agile Scrum на протяжении всего проекта, что привело к созданию продуктa, чем мы все невероятно гордимся. Проект был в основном написан на Dart с использованием Flutter, и, следовательно, его можно загрузить как на iOS, так и на Android.',
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
