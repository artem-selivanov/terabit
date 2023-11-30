const path = require('path');
//console.log(path.join(process.cwd(), `.env`))
const path2 = process.cwd().indexOf("/home/terabit") > -1 ? "/home/terabit/terabit" : "D:\\OpenServer\\domains\\terabit"
require('dotenv').config({path: path.join(path2, `.env`)});

const horo_auth = {
    login: process.env.EMAIL,
    pass: process.env.PASS,
    domain: process.env.SITE
}
const dclink = process.env.API

const validCats = ['Аудіо',
    'Аксесуари до навушників і гарнітури',
    'Навушники та гарнітури',
    'Фото і відео техніка',
    'Аксесуари до ігрових приставок',
    'Геймерські меблі',
    'Ігри',
    'Ігрові приставки',
    'Аксесуари для АКБ',
    'Аксесуари для ДБЖ',
    'Акумуляторні батареї',
    'Альтернативні джерела енергії',
    'Генератори',
    'Джерела безперебійного живлення (ДБЖ)',
    'Мережеві фільтри, подовжувачі та адаптери',
    'Приладдя для УМБ та зарядних станцій',
    'Стабілізатори напруги',
    'Універсальні мобільні батареї',
    'Ноутбуки',
    'Планшети',
    'Електронні книги',
    'Графічні планшети',
    'Аксесуари для планшетів',
    'Аксесуари для ноутбуків',
    'Аксесуари дo графічних планшетів',
    'Комплектуючі до ПК',
    "Комп'ютерна периферія",
    "Комп'ютери і монітори",
    'Офісна техніка',
    'Мережеве обладнання',
    'Смартфони',
    'Кнопкові мобільні телефони',
    'Пошукові мітки та GPS-трекери',
    'Аксесуари до мобільних телефонів',
    'Телевізори',
    'Медіаплеєри',
    'TV-тюнери',
    'Проектори та екрани',
    'Аксесуари до телевізорів'
]

module.exports = {horo_auth, dclink, validCats}

/*
Kirilluammm@gmail.com
KYKmvbyc67890
*/