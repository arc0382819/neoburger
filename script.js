// Меню Neo Burger — по альбому «МЕНЮ» в ВК (Ломоносов), прочитано 13.11.2026.
// Поля: price — цена, from — показать «от», combo — [средний, большой] комбо,
// spicy — острое, pixel — пиксельная картинка из pixelArts.
const menu = {
  "Бургеры": [
    { name: "Бигнео", price: 595, combo: [840, 880], desc: "3 большие котлеты, томаты, чеддер, Айсберг, красный лук, соусы барбекю и сливочный" },
    { name: "Президент Нео", price: 515, combo: [760, 800], desc: "2 большие котлеты, бекон, чеддер, Айсберг, красный лук, томаты, соусы фирменный и барбекю" },
    { name: "Необургер", price: 495, combo: [740, 780], desc: "2 большие котлеты, чеддер, Айсберг, томаты, маринованные огурчики, фирменный соус" },
    { name: "Максбургер", price: 475, combo: [720, 760], desc: "2 большие котлеты, томаты, чеддер, Айсберг, хашбраун, огурчики, соусы сырный и сливочный" },
    { name: "Гуакамоле", price: 445, desc: "Говядина, булочка бриошь, руккола, эмменталь, томаты, бекон, соус гуакамоле" },
    { name: "Гриль бургер", price: 435, desc: "Говядина, печёный перец, булочка бриошь, чеддер, Айсберг, фирменный соус" },
    { name: "Начос", price: 415, desc: "Говядина, начос, Айсберг, красный лук, томаты, соусы сальса и чеддер" },
    { name: "Чизи Биф", price: 415, desc: "Котлета, булочка бриошь, Айсберг, томаты, пармезан и плавленый чеддер, соус пармеджано" },
    { name: "Чизи Чикен", price: 415, desc: "Куриное филе в панировке, бриошь, Айсберг, томаты, пармезан и плавленый чеддер, соус пармеджано" },
    { name: "Нео Тейсти", price: 380, desc: "Большая котлета, эмменталь, Айсберг, томаты, соус гриль" },
    { name: "Моцарелла бургер", price: 370, desc: "Говядина, сырная котлета, Айсберг, соус сацебели" },
    { name: "Хеллбургер", price: 365, combo: [610, 650], spicy: true, desc: "Большая котлета, халапеньо, чеддер, Айсберг, томаты, красный лук, сливочный соус" },
    { name: "Топ Классик", price: 365, desc: "Говядина, чеддер, красный лук, Айсберг, томаты, огурчики, кетчуп, горчица, сливочный соус" },
    { name: "Двойной Неофиш", price: 345, combo: [590, 630], desc: "Две котлеты из рыбного филе, Айсберг, чеддер, соус тар-тар" },
    { name: "Классик", price: 330, desc: "Говядина, чеддер, красный лук, маринованные огурчики, кетчуп, горчица" },
    { name: "Дабл Нео", price: 330, desc: "2 котлеты, чеддер, Айсберг, огурчики, соус «Бургер»" },
    { name: "Чикенбургер", price: 325, combo: [570, 610], desc: "Хрустящее куриное филе в панировке, Айсберг, соусы сырный и сливочный" },
    { name: "Русбургер", price: 295, combo: [540, 580], desc: "Котлета, огурчики, чеддер, Айсберг, томаты, бекон, соусы барбекю и гриль" },
    { name: "Двойной чизбургер", price: 285, combo: [530, 570], desc: "2 котлеты, чеддер, маринованные огурчики, кетчуп" },
    { name: "Марсбургер", price: 275, pixel: "mars", desc: "Красная булочка, луковые кольца, котлета, чеддер, огурчики, Айсберг, томаты, соусы барбекю и сливочный" },
    { name: "Зенит Бургер", price: 275, pixel: "zenit", desc: "Голубая булочка, котлета, Айсберг, хашбраун, лук фри, соус «1000 островов»" },
    { name: "Неофиш", price: 265, combo: [510, 550], desc: "Котлета из нежного рыбного филе, Айсберг, чеддер, соус тар-тар" },
    { name: "Армагеддон", price: 215, spicy: true, pixel: "armageddon", desc: "Чёрная булочка, котлета, Айсберг, томаты, соусы сливочный и чили-пеперончини" },
    { name: "Чизбургер", price: 139, desc: "Котлета, чеддер, кетчуп, маринованные огурчики" },
    { name: "Гамбургер", price: 129, desc: "Котлета, кетчуп, маринованные огурчики" },
    { name: "Мини-чикен", price: 129, desc: "Куриная котлета, сливочный соус, Айсберг" }
  ],
  "Роллы": [
    { name: "Нео Шримп", price: 495, combo: [740, 780], desc: "Тортилья, креветки в панировке, Айсберг, чеддер, красный лук, коктейльный соус" },
    { name: "Цезарь ролл", price: 375, combo: [620, 660], desc: "Тортилья, томаты, куриные стрипсы, Айсберг, пармезан, соус «Цезарь»" },
    { name: "Грандбокс", price: 350, combo: [595, 635], desc: "Куриное филе, чеддер, Айсберг, томаты, тортилья, хашбраун, сливочный соус" },
    { name: "Ролл Барбекю", price: 345, combo: [590, 630], spicy: true, desc: "Тортилья, бекон, куриные стрипсы, халапеньо, Айсберг, соус барбекю" },
    { name: "Неоролл", price: 325, combo: [570, 610], desc: "Тортилья, томаты, 2 котлеты, Айсберг, красный лук, дымчатый соус" },
    { name: "Ист Ролл", price: 245, combo: [490, 530], desc: "Тортилья, куриные стрипсы, Айсберг, томаты, соус «Ист Ролл»" },
    { name: "Мини-ролл", price: 160, combo: [405, 445] }
  ],
  "Шаверма и хот-доги": [
    { name: "Шаверма на тарелке", price: 495, desc: "С картофелем фри или айдахо, с овощами" },
    { name: "Шаверма в лаваше", price: 365 },
    { name: "Шаверма в пите", price: 310 },
    { name: "Френч-дог", price: 280 },
    { name: "Хот-дог", price: 250 },
    { name: "Пита-дог двойной", price: 245 },
    { name: "Пита-дог", price: 195 }
  ],
  "Курица": [
    { name: "Сет «Крылья»", price: 895, spicy: true, desc: "20 острых крылышек" },
    { name: "Сет «Ассорти»", price: 895, desc: "Наггетсы, стрипсы, крылья — 18 штук" },
    { name: "Креветки в панировке", price: 445, from: true, desc: "5 шт + соус — 445 ₽ · 9 шт + 2 соуса — 685 ₽ · 20 шт + 3 соуса — 1370 ₽" },
    { name: "Наггетсы", price: 255, from: true, desc: "6 шт — 255 ₽ · 9 шт — 335 ₽ · 20 шт — 645 ₽" },
    { name: "Стрипсы", price: 240, from: true, desc: "3 шт — 240 ₽ · 6 шт — 420 ₽ · 9 шт — 565 ₽" },
    { name: "Острые крылья", price: 220, from: true, spicy: true, desc: "3 шт — 220 ₽ · 6 шт — 380 ₽ · 9 шт — 495 ₽" },
    { name: "Криспи чикен", price: 195, from: true, desc: "6 шт — 195 ₽ · 9 шт — 240 ₽ · 20 шт — 395 ₽" }
  ],
  "Закуски": [
    { name: "Снек-микс", price: 395, from: true, desc: "Луковые кольца, креветки, сырные медальоны. L — 395 ₽ · XL — 595 ₽" },
    { name: "Криспи-микс", price: 350, from: true, desc: "Криспи чикен, сырные медальоны, луковые кольца. L — 350 ₽ · XL — 545 ₽" },
    { name: "Снек бокс", price: 310, desc: "2 стрипса, 3 криспи чикен, малый картофель фри" },
    { name: "Баварская закуска", price: 295, desc: "Сосиска, картофель фри, огуречно-горчичный соус" },
    { name: "Сырная закуска", price: 245, desc: "Картофель фри, лук фри, плавленый чеддер" },
    { name: "Картофель по-деревенски", price: 230 },
    { name: "Сырные медальоны / чеддер шарики", price: 210, from: true, desc: "5 шт — 210 ₽ · 9 шт — 350 ₽ · 20 шт — 625 ₽" },
    { name: "Батат фри", price: 195, desc: "С пармезаном" },
    { name: "Луковые кольца", price: 190 },
    { name: "Картофель фри", price: 140, from: true, desc: "Малый — 140 ₽ · средний — 170 ₽ · большой — 225 ₽" },
    { name: "Картофельные крокеты", price: 79, from: true, desc: "5 шт — 79 ₽ · 10 шт — 139 ₽" },
    { name: "Соус Heinz", price: 60, desc: "Акция: 3 соуса по цене 2 — 120 ₽" }
  ],
  "Салаты": [
    { name: "Цезарь с креветками", price: 399 },
    { name: "Цезарь с курицей", price: 319 },
    { name: "Греческий", price: 279 }
  ],
  "Детям и десерты": [
    { name: "Детский набор с игрушкой", price: 470, desc: "Фри + кетчуп + сок + гамбургер, чизбургер или наггетсы на выбор" },
    { name: "Мороженое", price: 180 },
    { name: "Пирожок", price: 99, desc: "Вишня или лесная ягода. 2 шт — 149 ₽" },
    { name: "Кукис", price: 95 },
    { name: "Кекс", price: 95, desc: "В ассортименте" },
    { name: "Топпинг", price: 40, desc: "В ассортименте" }
  ],
  "Напитки": [
    { name: "Айс капучино", price: 385, desc: "0,4 л" },
    { name: "Молочный коктейль", price: 245, from: true, desc: "0,3 / 0,4 / 0,5 л — 245 / 275 / 295 ₽" },
    { name: "Энергетик", price: 225, desc: "В ассортименте" },
    { name: "Глясе", price: 195, from: true, desc: "0,2 / 0,3 л — 195 / 245 ₽" },
    { name: "Флэт уайт", price: 195, desc: "0,2 л" },
    { name: "Латте", price: 180, from: true, desc: "0,2 / 0,3 л — 180 / 235 ₽" },
    { name: "Капучино", price: 170, from: true, desc: "0,2 / 0,3 л — 170 / 225 ₽" },
    { name: "Американо", price: 150, from: true, desc: "0,2 / 0,3 л — 150 / 180 ₽" },
    { name: "Газировка", price: 140, from: true, desc: "0,3 / 0,4 / 0,5 / 0,8 л — 140 / 160 / 180 / 240 ₽" },
    { name: "Эспрессо", price: 135, desc: "Двойной — 150 ₽" },
    { name: "Вода Аква Минерале", price: 135 },
    { name: "Морс", price: 130, from: true, desc: "0,3 / 0,5 / 0,8 л — 130 / 170 / 230 ₽" },
    { name: "Сок", price: 100, desc: "0,2 л" },
    { name: "Чай", price: 85, from: true, desc: "0,2 / 0,3 л — 85 / 105 ₽" }
  ],
  "Бабл-ти": [
    { name: "Чиз фруктовый чай", price: 410, desc: "Персик, манго, черника, клубника, виноград — улун, фрукт, сырная пенка, лёд. 650 мл" },
    { name: "Йогуртовые смузи", price: 380, from: true, desc: "Виноград, черника, манго, персик, клубника. 650 мл" },
    { name: "Фруктовый чай", price: 375, from: true, desc: "Арбуз, грейпфрут, виноград, клубника, манго-маракуйя — жасминовый чай с бобо" },
    { name: "Молочный чай", price: 370, from: true, desc: "Жемчужный, жасминовый, персиковый улун, карамель, орео, таро, лаванда, тайский" },
    { name: "Матча", price: 355, from: true, desc: "С чёрным сахаром, манго, клубника, сакура" },
    { name: "Кофе с тапиокой", price: 330, from: true, desc: "Фиалковый рассвет, Ягодный нуар, Альпийское утро, кокос с чёрной смородиной или лавандой" },
    { name: "Напитки от шефа", price: 250, from: true, desc: "Лимонный взрыв, Райский сад, Плохая девушка, Плохой парень, Игривый флирт, Первая любовь" },
    { name: "Топпинги", price: 40, from: true, desc: "Бобо 40 ₽ · таро и тапиока 60 ₽ · джус-боллы и сырная пенка 70 ₽" }
  ]
};

// ---------- Пиксель-арт ----------
// Каждый символ — одна клетка. Точка — пусто.
const pixelArts = {
  zenit: {
    title: "Пиксельный Зенит Бургер с синей булкой",
    palette: {
      b: "#0d47a1", // тень синей булки
      B: "#1e88e5", // синяя булка, как у «Зенита»
      s: "#ffffff", // белый кунжут
      L: "#43a047", // салат
      l: "#2e7d32", // тёмный салат
      C: "#ffc72c", // сыр
      P: "#7a4320", // говяжья котлета
      p: "#4a2511", // тёмные края котлеты
      W: "#9c5a2e"  // светлые прожилки на котлете
    },
    grid: [
      "....bbbbbbbb....",
      "..bBBsBBBBsBBb..",
      ".bBBBBBBsBBBBBb.",
      ".bBsBBBBBBBBsBb.",
      "bBBBBBsBBBBBBBBb",
      "LlLLLlLLLlLLLlLL",
      "CCCCCCCCCCCCCCCC",
      ".C.CCC.CCCC.CC..",
      "pPPPPPPPPPPPPPPp",
      "pPWPPPWPPWPPPWPp",
      "pPPPPPPPPPPPPPPp",
      ".pppppppppppppp.",
      "bBBBBBBBBBBBBBBb",
      ".bbbbbbbbbbbbbb."
    ]
  }
};

pixelArts.armageddon = {
  title: "Пиксельный бургер Армагеддон с чёрной булкой и острым соусом",
  palette: {
    b: "#0a0a0a", // тень чёрной булки
    B: "#2e2e2e", // чёрная булка
    h: "#5a5a5a", // блик на булке
    s: "#ffffff", // белый кунжут
    L: "#43a047", // салат
    l: "#2e7d32", // тёмный салат
    T: "#e53935", // томаты
    P: "#7a4320", // говяжья котлета
    p: "#4a2511", // тёмные края котлеты
    W: "#9c5a2e", // прожилки на котлете
    R: "#ff1744"  // соус чили-пеперончини
  },
  grid: [
    "....bbbbbbbb....",
    "..bBBsBBBBsBBb..",
    ".bBhhBBBsBBBBBb.",
    ".bBhBBBBBBBBsBb.",
    "bBBBBBsBBBBBBBBb",
    "LlLLLlLLLlLLLlLL",
    "TTTTTTTTTTTTTTTT",
    "pPPPPPPPPPPPPPPp",
    "pPWPPPWPPWPPPWPp",
    "pPPPPPPPPPPPPPPp",
    ".R.RRR.RRRR.RR..",
    "bBBBBBBBBBBBBBBb",
    ".bbbbbbbbbbbbbb."
  ]
};

// Марсбургер: красные булки, луковые кольца, чеддер, огурчики, айсберг, томаты, соус барбекю
pixelArts.mars = {
  title: "Пиксельный Марсбургер с красной булкой и луковыми кольцами",
  palette: {
    b: "#7f0000", // тень красной булки
    B: "#d32f2f", // красная булка
    h: "#ff6f60", // блик на булке
    s: "#fff3e0", // кунжут
    L: "#aed581", // айсберг
    G: "#558b2f", // огурчики
    T: "#ff7043", // томаты
    C: "#ffa000", // чеддер
    P: "#7a4320", // котлета
    p: "#4a2511", // края котлеты
    W: "#9c5a2e", // прожилки
    O: "#f5deb3", // луковые кольца
    o: "#c9a96e", // тень колец
    S: "#5d2a0c"  // соус барбекю
  },
  grid: [
    "....bbbbbbbb....",
    "..bBBsBBBBsBBb..",
    ".bBhhBBBsBBBBBb.",
    ".bBhBBBBBBBBsBb.",
    "bBBBBBsBBBBBBBBb",
    "LLLLLLLLLLLLLLLL",
    "TTGGTTTTGGTTTTGG",
    "CCCCCCCCCCCCCCCC",
    ".C...C..C....C..",
    "pPPPPPPPPPPPPPPp",
    "pPWPPPWPPWPPPWPp",
    "pPPPPPPPPPPPPPPp",
    "OoO.OoO.OoO.OoO.",
    "SSSSSSSSSSSSSSSS",
    "bBBBBBBBBBBBBBBb",
    ".bbbbbbbbbbbbbb."
  ]
};

// ---------- Конструктор пиксельных бургеров ----------
// Остальные бургеры собираются из готовых слоёв по составу из меню.
// Рисунки условные: сделаны по списку ингредиентов, а не по фото блюд.
const burgerColors = {
  L: "#43a047", l: "#2e7d32", // айсберг
  T: "#e53935",               // томаты
  I: "#ff5722", i: "#bf360c", // печёный перец
  N: "#8e24aa", n: "#ce93d8", // красный лук
  G: "#558b2f", g: "#9ccc65", // огурчики
  J: "#00c853",               // халапеньо
  C: "#ffa000",               // чеддер
  E: "#ffe082", e: "#f9a825", // эмменталь
  Y: "#fff3c4", y: "#e6d38a", // пармезан и моцарелла
  A: "#b83227", a: "#f1a9a0", // бекон
  H: "#e6b422", x: "#b07d12", // хашбраун
  V: "#ffca28",               // начос
  P: "#7a4320", p: "#4a2511", W: "#9c5a2e", // говяжья котлета
  K: "#e0a44a", k: "#a8641c", // курица в панировке
  F: "#f3d9a4", f: "#c79a55", // рыбная котлета
  S: "#5d2a0c",               // соус барбекю и гриль
  D: "#fffaf0",               // белые соусы
  Q: "#ff1744",               // кетчуп, сальса, сацебели
  Z: "#ff8a3d",               // сырный и фирменный соусы
  U: "#aed581",               // гуакамоле
  M: "#fdd835"                // горчица
};

// Цвета булок: обычная с кунжутом и гладкая бриошь
const bunColors = {
  classic: { b: "#8d4a12", B: "#e09a3e", h: "#f6c56f", s: "#fff3e0" },
  brioche: { b: "#8a4b0f", B: "#f0a02c", h: "#ffd27a", s: "#f0a02c" }
};

const bunTop = [
  "....bbbbbbbb....",
  "..bBBsBBBBsBBb..",
  ".bBhhBBBsBBBBBb.",
  ".bBhBBBBBBBBsBb.",
  "bBBBBBsBBBBBBBBb"
];
const bunBottom = [
  "bBBBBBBBBBBBBBBb",
  ".bbbbbbbbbbbbbb."
];

// Капли соуса нужного цвета
const sauce = ch => [".X.XXX.XXXX.XX..".replaceAll("X", ch)];

const layers = {
  lettuce:   ["LlLLLlLLLlLLLlLL"],
  arugula:   ["l.lLl.lLl.lLl.lL"],
  tomato:    ["TTTTTTTTTTTTTTTT"],
  pepper:    ["IIiIIIIiIIIIiIII"],
  onion:     ["NnNNnNNnNNnNNnNN"],
  pickles:   [".GgG.GgG.GgG.Gg."],
  jalapeno:  ["J.JJ.J.JJ.J.JJ.J"],
  cheese:    ["CCCCCCCCCCCCCCCC"],
  cheeseDrip: ["CCCCCCCCCCCCCCCC", ".C...C..C....C.."],
  emmental:  ["EEeEEEEeEEEEeEEE"],
  parmesan:  ["YyYYyYYYyYYyYYYy"],
  bacon:     ["AaAAaAAAaAAaAAAa"],
  hashbrown: ["HxHHxHHHxHHxHHHx"],
  nachos:    ["V.VV.V.VV.V.VV.V"],
  // Котлеты: обычная — 3 ряда, тонкая (для двойных бургеров) — 2 ряда
  patty2:    ["pPWPPPWPPWPPPWPp", "pPPPPPPPPPPPPPPp"],
  chicken2:  ["kKKKKKKKKKKKKKKk", "kKkKKKkKKkKKKkKk"],
  fish2:     ["fFFFFFFFFFFFFFFf", "fFfFFFfFFfFFFfFf"],
  mozzarella: ["kYYYYYYYYYYYYYYk", "kYYYYYYYYYYYYYYk"],
  bbq:       sauce("S"),
  white:     sauce("D"),
  red:       sauce("Q"),
  orange:    sauce("Z"),
  guacamole: sauce("U"),
  ketchupMustard: [".Q.QMM.QQMM.QQ.."]
};
layers.patty = ["pPPPPPPPPPPPPPPp", ...layers.patty2];
layers.chicken = [...layers.chicken2, "kKKKKKKKKKKKKKKk"];
layers.fish = [...layers.fish2, "fFFFFFFFFFFFFFFf"];

// Рецепты: какая булка и какие слои сверху вниз
const burgerRecipes = {
  "Бигнео":            ["classic", "lettuce tomato onion patty2 cheese patty2 cheese patty2 bbq"],
  "Президент Нео":     ["classic", "lettuce tomato onion bacon patty2 cheese patty2 bbq"],
  "Необургер":         ["classic", "lettuce tomato pickles patty2 cheese patty2 orange"],
  "Максбургер":        ["classic", "lettuce tomato pickles hashbrown patty2 cheese patty2 orange"],
  "Гуакамоле":         ["brioche", "guacamole arugula tomato bacon emmental patty"],
  "Гриль бургер":      ["brioche", "lettuce pepper cheeseDrip patty orange"],
  "Начос":             ["classic", "lettuce tomato onion nachos cheese patty red"],
  "Чизи Биф":          ["brioche", "lettuce tomato parmesan cheeseDrip patty white"],
  "Чизи Чикен":        ["brioche", "lettuce tomato parmesan cheeseDrip chicken white"],
  "Нео Тейсти":        ["classic", "lettuce tomato emmental patty bbq"],
  "Моцарелла бургер":  ["classic", "lettuce mozzarella patty red"],
  "Хеллбургер":        ["classic", "lettuce tomato onion jalapeno cheeseDrip patty white"],
  "Топ Классик":       ["classic", "lettuce tomato onion pickles cheese patty ketchupMustard"],
  "Двойной Неофиш":    ["classic", "lettuce cheese fish2 cheese fish2 white"],
  "Классик":           ["classic", "onion pickles cheeseDrip patty ketchupMustard"],
  "Дабл Нео":          ["classic", "lettuce pickles patty2 cheese patty2 orange"],
  "Чикенбургер":       ["classic", "lettuce chicken orange"],
  "Русбургер":         ["classic", "lettuce tomato pickles bacon cheese patty bbq"],
  "Двойной чизбургер": ["classic", "pickles cheese patty2 cheese patty2 red"],
  "Неофиш":            ["classic", "lettuce cheese fish white"],
  "Чизбургер":         ["classic", "pickles cheeseDrip patty2 red"],
  "Гамбургер":         ["classic", "pickles patty2 red"],
  "Мини-чикен":        ["classic", "lettuce chicken2 white"]
};

// Собрать картинки и привязать их к блюдам (у кого уже есть свой рисунок — не трогаем)
menu["Бургеры"].forEach(dish => {
  const recipe = burgerRecipes[dish.name];
  if (!recipe || dish.pixel) return;
  const [bun, layerNames] = recipe;
  pixelArts[dish.name] = {
    title: `Пиксельный бургер «${dish.name}»`,
    palette: { ...burgerColors, ...bunColors[bun] },
    grid: [...bunTop, ...layerNames.split(" ").flatMap(name => layers[name]), ...bunBottom]
  };
  dish.pixel = dish.name;
});

// Превращает сетку символов в SVG-картинку из квадратиков.
// Готовые картинки запоминаем, чтобы не рисовать заново при каждом поиске и смене вкладки.
const pixelCache = new Map();
function pixelArt(name, cell = 4) {
  const key = name + "@" + cell;
  if (!pixelCache.has(key)) pixelCache.set(key, drawPixelArt(pixelArts[name], cell));
  return pixelCache.get(key);
}

function drawPixelArt(art, cell) {
  const rows = art.grid;
  const width = rows[0].length * cell;
  const height = rows.length * cell;
  let rects = "";
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const color = art.palette[ch];
      if (color) {
        rects += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}" fill="${color}"/>`;
      }
    });
  });
  return `<svg class="pixel-art" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges" role="img" aria-label="${art.title}"><title>${art.title}</title>${rects}</svg>`;
}

const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("menu-grid");
const searchEl = document.getElementById("menu-search");
const moreEl = document.getElementById("menu-more");

// Бургеры с цветной булкой — первые в меню и выделены жёлтым
const HITS = ["Зенит Бургер", "Марсбургер", "Армагеддон"];
// Эти блюда идут сразу после цветных бургеров
const FEATURED = ["Хеллбургер", "Начос", "Президент Нео"];
// Сколько блюд показывать сразу, пока список не развёрнут
const MENU_LIMIT = 8;
let currentCategory = "Бургеры";
let expanded = false;

// Строка меню: маленькая картинка, название ....... цена, состав
function dishHtml(dish, category) {
  const extra = [
    category,
    dish.combo ? `комбо ${dish.combo[0]} / ${dish.combo[1]} ₽` : ""
  ].filter(Boolean).join(", ");
  const hit = HITS.includes(dish.name);
  return `
    <div class="row${hit ? " row--hit" : ""}">
      ${dish.pixel ? pixelArt(dish.pixel, hit ? 4 : 3) : ""}
      <div class="row__main">
        <div class="row__head">
          <h3 class="row__name">${dish.name}${dish.spicy ? ` <span class="badge">острое</span>` : ""}</h3>
          <span class="row__dots"></span>
          <span class="row__price">${dish.from ? "от " : ""}${dish.price} ₽</span>
        </div>
        ${dish.desc ? `<p class="row__desc">${dish.desc}</p>` : ""}
        ${extra ? `<p class="row__extra">${extra[0].toUpperCase() + extra.slice(1)}</p>` : ""}
      </div>
    </div>
  `;
}

// Блюда категории в нужном порядке: сначала цветные бургеры, потом избранные, потом остальные
function categoryDishes(category) {
  const list = menu[category];
  const top = [...HITS, ...FEATURED];
  return [
    ...top.map(name => list.find(dish => dish.name === name)).filter(Boolean),
    ...list.filter(dish => !top.includes(dish.name))
  ];
}

// Подсветить активную кнопку: вкладку категории или кнопку города
function setActive(selector, key, value) {
  document.querySelectorAll(selector).forEach(button => {
    button.classList.toggle("active", button.dataset[key] === value);
  });
}

function setActiveTab(category) {
  setActive("#tabs .tab", "category", category);
}

// Показать блюда выбранной категории
function showCategory(category) {
  // При переходе в другую категорию список снова сворачивается
  if (category !== currentCategory) expanded = false;
  currentCategory = category;
  searchEl.value = "";
  const dishes = categoryDishes(category);
  const visible = expanded ? dishes : dishes.slice(0, MENU_LIMIT);
  gridEl.innerHTML = visible.map(dish => dishHtml(dish)).join("");
  moreEl.hidden = dishes.length <= MENU_LIMIT;
  moreEl.textContent = expanded ? "Свернуть" : `Показать все ${dishes.length}`;
  setActiveTab(category);
}

moreEl.addEventListener("click", () => {
  expanded = !expanded;
  showCategory(currentCategory);
  // После сворачивания возвращаемся к началу меню, чтобы не оказаться посреди страницы
  if (!expanded) document.getElementById("menu").scrollIntoView();
});

// Поиск по всем категориям сразу
function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    showCategory(currentCategory);
    return;
  }
  const found = [];
  Object.entries(menu).forEach(([category, dishes]) => {
    dishes.forEach(dish => {
      const text = (dish.name + " " + (dish.desc || "")).toLowerCase();
      if (text.includes(q)) found.push(dishHtml(dish, category));
    });
  });
  setActiveTab(null);
  moreEl.hidden = true;
  gridEl.innerHTML = found.length
    ? found.join("")
    : `<p class="menu-empty">Ничего не нашлось. Попробуйте другое слово.</p>`;
}

// Создать вкладки с количеством блюд
Object.keys(menu).forEach(category => {
  const button = document.createElement("button");
  button.className = "tab";
  button.dataset.category = category;
  button.innerHTML = `${category} <span class="tab__count">${menu[category].length}</span>`;
  button.addEventListener("click", () => showCategory(category));
  tabsEl.appendChild(button);
});

searchEl.addEventListener("input", () => search(searchEl.value));

showCategory("Бургеры");

// ---------- Точки сети ----------
const locations = {
  "Ломоносов": {
    street: "Александровская ул., 32Б",
    coords: [59.910501, 29.775342], // широта, долгота — для карты и маршрута
    phone: "+7 (812) 422-97-79",
    hours: "Ежедневно, 10:00–23:00",
    vk: "https://vk.ru/neoburger",
    note: "Наша первая бургерная, открыта в 2014 году.",
    // Условия доставки — из закреплённого поста ВК от 26.10.2025
    delivery: [
      { zone: "Ломоносов", free: 1000, price: 250 },
      { zone: "Мартышкино, Сойкино, Кронколония", free: 1250, price: 300 },
      { zone: "Петергоф, Низино, Ижора", free: 1500, price: 350 },
      { zone: "Стрельна, Кронштадт, Лебяжье", free: 2500, price: 600 }
    ]
  },
  "Волхов": {
    street: "ул. Юрия Гагарина, 1В, ТРК «CUBUS», 1 этаж",
    coords: [59.927274, 32.292941],
    phone: "+7 (952) 382-22-35",
    hours: "Ежедневно, 10:00–21:00",
    vk: "https://vk.ru/neoburger3",
    note: "Доставка временно приостановлена, ждём вас в ТРК «CUBUS»."
  }
};

const cityInfoEl = document.getElementById("city-info");
const cityMapEl = document.getElementById("city-map");
const topCallEl = document.getElementById("top-call");
const deliveryEl = document.getElementById("delivery-info");

// Полный адрес: "г. Ломоносов, Александровская ул., 32Б"
function fullAddress(city) {
  return `г. ${city}, ${locations[city].street}`;
}

// Карта OpenStreetMap с меткой: без рекламы (в бесплатном виджете Яндекса она есть всегда)
function mapUrl([lat, lon]) {
  const bbox = [lon - 0.008, lat - 0.003, lon + 0.008, lat + 0.003].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
}

// Маршрут до точки в Яндекс Картах — откроется в приложении или на сайте
function routeUrl([lat, lon]) {
  return `https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`;
}

// Чат с группой: "https://vk.ru/neoburger" -> "https://vk.me/neoburger"
function vkChatUrl(vk) {
  return "https://vk.me/" + vk.split("/").pop();
}

// Номер вида "+7 (812) 422-97-79" -> "tel:+78124229779"
function telLink(phone) {
  return "tel:" + phone.replace(/[^\d+]/g, "");
}

// Блок «Доставка»: таблица зон или сообщение, что доставки нет, а под ним — кнопка заказа
function deliveryHtml(city) {
  const place = locations[city];
  const body = place.delivery
    ? `
      <table class="table">
        <thead>
          <tr><th>Куда везём</th><th>Доставка</th><th>Бесплатно при заказе от</th></tr>
        </thead>
        <tbody>
          ${place.delivery.map(d => `
            <tr><td>${d.zone}</td><td>${d.price} ₽</td><td>${d.free} ₽</td></tr>
          `).join("")}
        </tbody>
      </table>`
    : `<p class="delivery-off">${place.note}</p>`;
  // Если доставки нет — подсказываем, куда прийти
  const where = place.delivery ? "" : fullAddress(city) + ". ";
  return `
    ${body}
    <div class="delivery-foot">
      <a href="${telLink(place.phone)}" class="btn">Заказать по телефону ${place.phone}</a>
      <a href="${vkChatUrl(place.vk)}" class="btn btn--outline" target="_blank" rel="noopener">Написать в ВК</a>
      <span>${where}${place.hours}.</span>
    </div>
  `;
}

// Выбор города меняет сразу всё: шапку, строку с адресом, доставку, адреса и карту
function showCity(city) {
  const place = locations[city];
  const tel = telLink(place.phone);

  document.getElementById("place-city").textContent = city;
  document.getElementById("place-address").textContent = place.street;
  document.getElementById("place-hours").textContent = place.hours;
  const first = place.delivery && place.delivery[0];
  document.getElementById("place-delivery").textContent = first
    ? `Доставка по городу ${first.price} ₽, бесплатно от ${first.free} ₽`
    : "Доставка приостановлена";

  // Все кнопки «Позвонить» на странице помечены data-call
  document.querySelectorAll("[data-call]").forEach(link => { link.href = tel; });
  // Круглая кнопка ВК на телефонах — чат с группой выбранного города
  document.querySelectorAll("[data-vk]").forEach(link => { link.href = vkChatUrl(place.vk); });
  topCallEl.textContent = place.phone;

  cityInfoEl.innerHTML = `
    <p><span class="label">Адрес</span>${fullAddress(city)}</p>
    <p><span class="label">Часы работы</span>${place.hours}</p>
    <p><span class="label">Телефон</span><a href="${tel}">${place.phone}</a></p>
    <p><span class="label">ВКонтакте</span><a href="${place.vk}" target="_blank" rel="noopener">${place.vk.replace("https://", "")}</a></p>
    ${place.note ? `<p class="city-note">${place.note}</p>` : ""}
    <p class="contacts__buttons">
      <a href="${routeUrl(place.coords)}" class="btn btn--small btn--outline" target="_blank" rel="noopener">Построить маршрут в Яндекс Картах</a>
      <a href="${vkChatUrl(place.vk)}" class="btn btn--small btn--outline" target="_blank" rel="noopener">Написать в ВК</a>
    </p>
  `;
  // Карту перезагружаем, только если точка правда сменилась
  const map = mapUrl(place.coords);
  if (cityMapEl.src !== map) cityMapEl.src = map;

  deliveryEl.innerHTML = deliveryHtml(city);

  setActive("[data-city-tabs] .seg__btn", "city", city);

  // Запоминаем выбранный город, чтобы при следующем заходе открыть его сразу
  try { localStorage.setItem("neoburger-city", city); } catch (e) {}
}

// Кнопки городов есть в трёх местах: в шапке, в доставке и в адресах
document.querySelectorAll("[data-city-tabs]").forEach(box => {
  Object.keys(locations).forEach(city => {
    const button = document.createElement("button");
    button.className = "seg__btn";
    button.textContent = city;
    button.dataset.city = city;
    button.addEventListener("click", () => showCity(city));
    box.appendChild(button);
  });
});

// Подвал: обе точки с адресом, телефоном и часами
document.getElementById("footer-places").innerHTML = Object.entries(locations).map(([city, place]) => `
  <div>
    <h3>${city}</h3>
    <p>${fullAddress(city)}</p>
    <p><a href="${telLink(place.phone)}">${place.phone}</a></p>
    <p>${place.hours}</p>
  </div>
`).join("");

let savedCity = null;
try { savedCity = localStorage.getItem("neoburger-city"); } catch (e) {}
showCity(locations[savedCity] ? savedCity : "Ломоносов");

// ---------- Плашка про cookie ----------
// Показываем, пока посетитель не нажал «Хорошо». Если браузер не даёт сохранить
// согласие (приватный режим), плашка просто появится снова при следующем заходе.
const cookieEl = document.getElementById("cookie");
let cookieOk = false;
try { cookieOk = localStorage.getItem("neoburger-cookie-ok") === "1"; } catch (e) {}
cookieEl.hidden = cookieOk;
document.getElementById("cookie-ok").addEventListener("click", () => {
  cookieEl.hidden = true;
  try { localStorage.setItem("neoburger-cookie-ok", "1"); } catch (e) {}
});
