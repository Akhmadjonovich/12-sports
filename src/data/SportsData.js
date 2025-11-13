// src/data/sportsData.js

export const sportsData = [
    {
      id: "athletics",
      name: "Yengil atletika",
      image: "/athletics.jpg",
      founded:
        "Qadimiy Yunoniston davridan boshlangan, zamonaviy shakli XIX asrda rivojlandi.",
      teamSize: "Individual yoki jamoaviy, turlariga qarab farq qiladi.",
      fieldSize: "400 metr trek, sakrash va uloqtirish maydonlari bilan.",
      rules:
        "Har bir tadbirda maqsad – eng tez yugurish, eng uzoqqa sakrash yoki uloqtirish.",
      history:
        "Yengil atletika qadimiy Olimpiya o‘yinlarining markaziy qismi bo‘lgan.",
      facts:
        "Usain Bolt 100 metrni 9.58 soniyada bosib o‘tgan — inson tarixidagi eng tez yugurish.",
      description:
        "Yengil atletika inson jismoniy imkoniyatlarini sinovdan o‘tkazuvchi sport turi bo‘lib, yugurish, sakrash va uloqtirish kabi turlarni o‘z ichiga oladi. Har bir sportchi tezlik, kuch va sabr bilan raqobatlashadi.",
    },
    {
      id: "badminton",
      name: "Badminton",
      image: "/badminton.webp",
      founded: "1873-yil Angliyada zamonaviy shaklda tashkil topgan.",
      teamSize: "1 yoki 2 o‘yinchi (singl va juftlik).",
      fieldSize: "13.4 × 6.1 metr (juftlik uchun).",
      rules:
        "Shuttlecockni raqib maydoniga tushirish orqali ochko olinadi.",
      history:
        "Badminton Hindistonning 'Poona' o‘yini asosida yaratilgan.",
      facts:
        "Shuttlecock havoda 400 km/soatgacha tezlikda uchadi — eng tez raketka sporti!",
      description:
        "Badminton yengil, lekin tezkor sport bo‘lib, refleks va chaqqonlikni talab qiladi. O‘yinchilar shuttlecockni havoda ushlab turish uchun tez harakatlanishadi.",
    },
    {
      id: "basketball",
      name: "Basketbol",
      image: "/basketball.jpeg",
      founded: "1891-yilda Jeyms Neysmit tomonidan ixtiro qilingan.",
      teamSize: "Har jamoada 5 o‘yinchi.",
      fieldSize: "28 × 15 metr standart maydon.",
      rules: "To‘pni halqaga tushirish orqali ochko olinadi.",
      history: "Basketbol AQSHda qishki sport sifatida yaratilgan.",
      facts: [
        "Basketbol to‘pi dastlab futbol to‘pi o‘rnida ishlatilgan.",
        "Bir NBA o‘yinida o‘rtacha 100 dan ortiq hujum amalga oshiriladi.",
        "Dunyo bo‘ylab 450 milliondan ortiq inson basketbol o‘ynaydi.",
        "Michael Jordan basketbol tarixidagi eng mashhur sportchilardan biri hisoblanadi.",
        "Ayollar basketboli 1976-yildan boshlab Olimpiya dasturiga kiritilgan."
      ],
      description: "Basketbol — nafaqat sport, balki global madaniyatga aylangan jamoaviy o‘yin. U tezkor fikrlash, jismoniy moslashuvchanlik va jamoaviy muvofiqlikni talab qiladi. O‘yinchilar har bir sekundda qaror qabul qilishlari, raqibni kuzatishlari va imkoniyatni darhol qo‘lga olishlari kerak. Basketbol — bu strategiya, texnika va hissiyot uyg‘unligi. Professional darajada u san’atga o‘xshaydi: har bir pas, dribling yoki zarba — o‘ylangan harakat. Bu o‘yin millionlab yoshlarni orzu qilishga, jamoada ishlashni o‘rganishga va o‘z chegaralarini kengaytirishga ilhomlantiradi."
    }
    ,
    {
      id: "volleyball",
      name: "Voleybol",
      image: "/volleyball.jpg",
      founded: "1895-yil William G. Morgan tomonidan yaratilgan.",
      teamSize: "Har jamoada 6 o‘yinchi.",
      fieldSize: "18 × 9 metr.",
      rules:
        "To‘pni raqib maydoniga tushirish orqali ochko olinadi.",
      history:
        "Voleybol basketbolga o‘xshash, ammo yumshoqroq jismoniy sport sifatida yaratilgan.",
      facts:
        "1964-yildan beri Olimpiya o‘yini sifatida o‘tkaziladi.",
      
      description: "Voleybol — jamoaviy o‘yin bo‘lib, muvofiqlik, taktika va jismoniy faollikni birlashtiradi. O‘yinchilar to‘pni tarmoqqa urib, raqib maydoniga tushirish orqali ochko to‘plashadi. Bu sport 1895-yilda yaratilgan va 1964-yildan beri Olimpiya dasturiga kiritilgan. Voleybolning plyaj varianti ham juda mashhur bo‘lib, yozgi musobaqalarda o‘ziga xos tomosha yaratadi. O‘yin tezkor harakat, aniqlik va jamoaviy ruhni talab qiladi. Voleybol jamoaviy muloqotni kuchaytiradigan, ijobiy energiya beradigan sportdir."
    },
    {
      id: "handball",
      name: "Gandbol",
      image: "/handball.jpg",
      founded: "1898-yil Germaniyada yaratilgan.",
      teamSize: "Har jamoada 7 o‘yinchi (6 + darvozabon).",
      fieldSize: "40 × 20 metr.",
      rules:
        "To‘pni raqib darvozasiga tashlab gol kiritish kerak.",
      history:
        "Gandbol futbolga o‘xshash qo‘l o‘yini sifatida rivojlangan.",
      facts:
        "Eng tez zarba 120 km/soatgacha yetadi.",
      description:
        "Gandbol tezlik, kuch va strategiyani birlashtirgan jamoaviy o‘yin. O‘yinchilar to‘pni tez paslar orqali darvozaga yetkazadilar.",
    },
    {
      id: "chess",
      name: "Shaxmat",
      image: "/chess.jpg",
      founded: "Taxminan milodiy VI asrda Hindistonda paydo bo‘lgan.",
      teamSize: "1 ga 1 o‘yin.",
      fieldSize: "8×8 taxta (64 katak).",
      rules:
        "Figuralarni qoidalarga ko‘ra yurdirib, raqib qirolini 'mat' qilish kerak.",
      history:
        "Shaxmat 'Chaturanga' o‘yinidan kelib chiqqan.",
      facts:
        "Shaxmat eng ko‘p strategiya talab qiladigan intellektual sportdir.",
      description:
        "Shaxmat aql, sabr va strategiyani sinovdan o‘tkazuvchi sportdir. Har bir yurish o‘ylangan reja asosida amalga oshiriladi.",
    },
    {
      id: "fieldhockey",
      name: "Chim ustida xokkey",
      image: "/fieldhockey.jpg",
      founded: "XIX asr o‘rtalarida Angliyada yaratilgan.",
      teamSize: "Har jamoada 11 o‘yinchi.",
      fieldSize: "91.4 × 55 metr.",
      rules:
        "Tayoq bilan to‘pni raqib darvozasiga urish kerak.",
      history:
        "Maydon xokkeyi dastlab ingliz maktablarida o‘ynalgan.",
      facts:
        "O‘yin davomida sportchilar 10 kmgacha yugurishadi.",
      description:
        "Chim ustida xokkey tezkor va texnik sport turi bo‘lib, muvofiqlik va strategiyani talab qiladi. Jamoalar tayoq yordamida gol kiritish uchun kurashadi.",
    },
    {
      id: "football",
      name: "Futbol",
      image: "/football.webp",
      founded: "1863-yilda Angliyada shakllangan.",
      teamSize: "Har jamoada 11 o‘yinchi.",
      fieldSize: "105 × 68 metr (standart).",
      rules:
        "To‘pni qo‘l ishlatmasdan raqib darvozasiga kiritish kerak.",
      history:
        "Futbol qadimiy to‘p o‘yinlaridan rivojlangan.",
      facts:
        "FIFA Jahon Chempionati — eng katta sport tadbiri.",
      description:
        "Futbol — dunyodagi eng mashhur sport turi. U jamoaviylik, texnika va strategiyani uyg‘unlashtiradi hamda milliardlab muxlislarni birlashtiradi.",
    },
    {
      id: "rugby",
      name: "Regbi",
      image: "/rugby.jpg",
      founded: "1823-yilda Angliyaning Rugby shahrida boshlangan.",
      teamSize: "Har jamoada 15 o‘yinchi.",
      fieldSize: "100 × 70 metr.",
      rules:
        "To‘pni qo‘l bilan orqaga pas berish va try kiritish kerak.",
      history:
        "Regbi futbolning o‘zgarishidan kelib chiqqan sport turi.",
      facts:
        "Regbi o‘yinchilari o‘yinda 7–8 km yuguradi.",
      description:
        "Regbi kuch, jasorat va jamoaviylikni talab qiladigan sportdir. O‘yinchilar taktik jihatdan aniq harakat qilib, to‘pni raqib himoyasidan o‘tkazishga harakat qilishadi.",
    },
    {
      id: "tabletennis",
      name: "Stol tennisi",
      image: "/tabletennis.avif",
      founded: "1880-yillar, Angliya.",
      teamSize: "1 yoki 2 o‘yinchi.",
      fieldSize: "Stol: 2.74 × 1.525 metr.",
      rules:
        "11 ochkogacha o‘ynaladi, har setda 2 ochko farq kerak.",
      history:
        "Dastlab 'ping-pong' deb atalgan.",
      facts:
        "Eng tez xizmat zarbasi 112 km/soat tezlikda qayd etilgan.",
      description:
        "Stol tennisi tezkor reaktsiya va e’tibor talab qiladi. Har bir zarba aniqlik va tezlik bilan bajariladi, bu o‘yinni hayajonli qiladi.",
    },
    {
      id: "waterpolo",
      name: "Suv polosi",
      image: "/waterpolo.avif",
      founded: "XIX asr oxiri, Britaniya.",
      teamSize: "7 o‘yinchi (6 + darvozabon).",
      fieldSize: "25 × 20 metr suzish havzasi.",
      rules:
        "Suvda to‘pni raqib darvozasiga otish orqali gol olinadi.",
      history:
        "Dastlab daryolarda o‘ynalgan, keyinchalik havzalarga o‘tkazilgan.",
      facts:
        "Sportchilar yuqori darajada nafas nazorati va chidamlilikka ega bo‘lishi kerak.",
      description:
        "Suv polosi suzish, kuch va koordinatsiyani birlashtirgan sportdir. O‘yinchilar suvda harakatlanib, raqib himoyasini yorib o‘tishadi.",
    },
    {
      id: "wrestling",
      name: "Kurash",
      image: "/wrestling.avif",
      founded:
        "Qadimdan mavjud. Olimpiya dasturida miloddan avvalgi 708-yildan beri.",
      teamSize: "Individual.",
      fieldSize: "Gilam doirasi (diametri ~9 metr).",
      rules:
        "Raqibni gilamga tushirish yoki ball tizimi orqali ustunlikka erishish kerak.",
      history:
        "Kurash inson tarixidagi eng qadimiy sportlardan biridir.",
      facts:
        "O‘zbekiston kurashchilari jahon arenalarida ko‘plab medallarni qo‘lga kiritgan.",
      description:
        "Kurash — kuch, mahorat va taktika uyg‘unligidan iborat milliy faxrimiz. Sportchi raqibini muvozanatdan chiqarib, ustunlikni qo‘lga kiritishga harakat qiladi.",
    },
  ];
  