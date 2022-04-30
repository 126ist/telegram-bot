const TelegramBot = require('node-telegram-bot-api');
const token = '5339483600:AAGgH_f_YNrMXlSLgsx3Ty9ac3FZ41ebBYI';

const bot = new TelegramBot(token, {polling: true});



bot.on('message', (msg) => {

    function showContact() {
        bot.sendMessage(msg.chat.id, "Наші соц мережі");
        let socialMedia = ['https://www.instagram.com/istblock/', 'https://www.facebook.com/groups/ISTblock'];
        for(let i = 0; i < socialMedia.length; i++) {
            bot.sendMessage(msg.chat.id, socialMedia[i]);
        }
    }

    function showLocation() {
        bot.sendMessage(msg.chat.id, "Шукай нас тут📍");
        bot.sendLocation(msg.chat.id,49.595153, 34.552801);
    }
    let Hi = "Привіт";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,`Привіт👋, ${msg.from.first_name},це бот🤖 який допоможе тобі отримати корисну інформацію. Для початку роботи пропиши /start`);
    }

    let Bye = "Бувай";
    if(msg.text.toString().toLowerCase().indexOf(Bye) === 0) {
        bot.sendMessage(msg.chat.id, `Пока👋, ${msg.from.first_name}`);
    }

    let departmentInfo = "Про кафедру";
    if(msg.text.indexOf(departmentInfo) === 0) {
        bot.sendMessage(msg.chat.id, `Подивіться відеоролик про нашу кафедру на посиланням 👇🏻
        https://youtu.be/99oXMJPXa4s`);
    }

    if(msg.text.indexOf("Викладачі") === 0) {
        bot.sendPhoto(msg.chat.id, "img/prepod.jpg",{caption : "Детальніше про викладачів дізнайтеся на офіційному сайті Полтавського державного аграрного університету: https://www.pdau.edu.ua/department/kafedra-ekonomichnoyi-kibernetyky-ta-informaciynyh-tehnologiy"});
    }
    
    let admissionInfo = "Вступ";
    if(msg.text.indexOf(admissionInfo) === 0) {
        bot.sendMessage(msg.chat.id, "Варіанти вступу", {
            "reply_markup": {
                "keyboard": [
                            ["До магістратури 👩🏻‍🏫"], 
                            ['На основі повної загальної середньої освіти 👩🏻‍🎓'],
                            ['На основі диплома молодшого спеціаліста, молодшого бакалавра, фахового молодшого бакалавра 👨🏻‍💻'],
                            ['🔙 Повернутися']
                        ]
                }
            });

    }

    let backBtn = "🔙 Повернутися";
    if(msg.text.indexOf(backBtn) === 0) {
        bot.sendMessage(msg.chat.id, "Обери інформацію яка тебе цікавить👇", {
            "reply_markup": {
                "keyboard": [["Вступ", "Контакти"],   ["Про кафедру", "Викладачі"], ]
                }
        });

    }

    let magisterInfo = "До магістратури";
    if(msg.text.indexOf(magisterInfo) === 0) {
        bot.sendMessage(msg.chat.id, "На бюджет: Фаховий іспит");
        bot.sendMessage(msg.chat.id, "На контракт: Мотиваційний лист");
    }

    let schoolInfo = "На основі повної загальної середньої освіти";
    if(msg.text.indexOf(schoolInfo) === 0) {
        bot.sendMessage(msg.chat.id, "На бюджет: Національний мільтипредметний тест (українська мова, математика, історія України) + Мотиваційний лист");
        bot.sendMessage(msg.chat.id, "На контракт: Мотиваційний лист");
    }

    let bachelorInfo = "На основі диплома молодшого спеціаліста, молодшого бакалавра, фахового молодшого бакалавра";
    if(msg.text.indexOf(bachelorInfo) === 0) {
        bot.sendMessage(msg.chat.id, 
        "На бюджет: Національний мільтипредметний тест (українська мова, математика, історія України) +\nМотиваційний лист " +
        " або ЗНО 2019, 2020 або 2021 рр.:\n" + 
            "1️⃣. українська мова \n" +
            "2️⃣. математика / історія України \n" +
            "3️⃣. Мотиваційний лист");
        bot.sendMessage(msg.chat.id, "На контракт: Мотиваційний лист");
    }

    let contactInfo = "Контакти";
    if(msg.text.indexOf(contactInfo) === 0) {
        bot.sendMessage(msg.chat.id, "Контактна інформація кафедри: " + 
        "навчальний корпус №2,\nкабінети 201, 205, 207.\nТелефон/факс: (0532) 60-82-31\ne-mail: informac@pdaa.edu.ua\nОбери що саме тебе цікавить👇", {
            "reply_markup": {
                "keyboard": [["Соц мережі", "Мапа"], ['🔙 Повернутися']]
                }
            });
    }
    if(msg.text.indexOf("Соц мережі") === 0) {
        showContact();
    }

    if(msg.text.indexOf("Мапа") === 0) {
        showLocation();
    }



});




bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, "Обери інформацію яка тебе цікавить👇", {
            "reply_markup": {
                "keyboard": [["Вступ", "Контакти"],   ["Про кафедру", "Викладачі"], ]
                }
        });

});

// bot.onText(/\/sendpic/, (msg) => {
//     bot.sendPhoto(msg.chat.id, "https://i.pinimg.com/originals/eb/bb/9c/ebbb9c6067fd1f30c0c1b5261833e051.jpg" );
    
// });



