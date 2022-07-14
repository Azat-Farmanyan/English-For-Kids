// Categories
const categories = [
  {
    title: "Fairy tales",
    image: "/fairy-tales-cover.jpg",
    color: "#e28cd1",
    link: "#",
  },
  {
    title: "Animals 1",
    image: "/animals-1-cover.jpg",
    color: "#58A600",
    link: "#",
  },
  {
    title: "Animals 2",
    image: "/animals-2-cover.jpg",
    color: "#639944",
    link: "#",
  },
  {
    title: "Clothes",
    image: "/clothes-cover.png",
    color: "#FF5388",
    link: "#",
  },
  {
    title: "Emotions",
    image: "/emotions-cover.png",
    color: "#85B22E",
    link: "#",
  },
  {
    title: "Action 1",
    image: "/action-1-cover.png",
    color: "#3AC5FF",
    link: "#",
  },
  {
    title: "Action 2",
    image: "/action-2-cover.png",
    color: "#F99808",
    link: "#",
  },
  {
    title: "Foods",
    image: "/food-cover.jpg",
    color: "#F36F56",
    link: "#",
  },
];
//---Fairitales--
const fairy_tales = [
  {
    word: "dragon",
    translation: "Дракон",
    image: "/dragon.jpg",
    audioSrc: "audio/dragon.mp3",
  },
  {
    word: "fairy",
    translation: "Фея",
    image: "/fairy.png",
    audioSrc: "audio/fairy.mp3",
  },
  {
    word: "king",
    translation: "король",
    image: "/king.png",
    audioSrc: "audio/king.mp3",
  },
  {
    word: "knight",
    translation: "рыцарь",
    image: "/knight.jpg",
    audioSrc: "audio/knight.mp3",
  },
  {
    word: "mermaid",
    translation: "Русалочка",
    image: "/mermaid.jpg",
    audioSrc: "audio/mermaid.mp3",
  },
  {
    word: "princess",
    translation: "принцесса",
    image: "/princess.jpg",
    audioSrc: "audio/princess.mp3",
  },
  {
    word: "witch",
    translation: "ведьма",
    image: "/witch.jpg",
    audioSrc: "audio/witch.mp3",
  },
  {
    word: "wizard",
    translation: "волшебник",
    image: "/wizard.jpg",
    audioSrc: "audio/wizard.mp3",
  },
];
//---Animal 1--
const animal_1 = [
  {
    word: "cat",
    translation: "кот",
    image: "/cat.jpg",
    audioSrc: "audio/cat.mp3",
  },
  {
    word: "chick",
    translation: "цыплёнок",
    image: "/chick.jpg",
    audioSrc: "audio/chick.mp3",
  },
  {
    word: "chicken",
    translation: "курица",
    image: "/chicken.jpg",
    audioSrc: "audio/chicken.mp3",
  },
  {
    word: "dog",
    translation: "собака",
    image: "/dog.jpg",
    audioSrc: "audio/dog.mp3",
  },
  {
    word: "horse",
    translation: "лошадь",
    image: "/horse.jpg",
    audioSrc: "audio/horse.mp3",
  },
  {
    word: "pig",
    translation: "свинья",
    image: "/pig.jpg",
    audioSrc: "audio/pig.mp3",
  },
  {
    word: "rabbit",
    translation: "кролик",
    image: "/rabbit.jpg",
    audioSrc: "audio/rabbit.mp3",
  },
  {
    word: "sheep",
    translation: "овца",
    image: "/sheep.jpg",
    audioSrc: "audio/sheep.mp3",
  },
];
//---Animal 2--
const animal_2 = [
  {
    word: "bird",
    translation: "птица",
    image: "/bird.jpg",
    audioSrc: "audio/bird.mp3",
  },
  {
    word: "fish",
    translation: "рыба",
    image: "/fish1.jpg",
    audioSrc: "audio/fish.mp3",
  },
  {
    word: "frog",
    translation: "жаба",
    image: "/frog.jpg",
    audioSrc: "audio/frog.mp3",
  },
  {
    word: "giraffe",
    translation: "жирафа",
    image: "/giraffe.jpg",
    audioSrc: "audio/giraffe.mp3",
  },
  {
    word: "lion",
    translation: "лев",
    image: "/lion.jpg",
    audioSrc: "audio/lion.mp3",
  },
  {
    word: "mouse",
    translation: "мышь",
    image: "/mouse.jpg",
    audioSrc: "audio/mouse.mp3",
  },
  {
    word: "turtle",
    translation: "черепаха",
    image: "/turtle.jpg",
    audioSrc: "audio/turtle.mp3",
  },
  {
    word: "dolphin",
    translation: "дельфин",
    image: "/dolphin.jpg",
    audioSrc: "audio/dolphin.mp3",
  },
];
//---Clothes--
const clothes = [
  {
    word: "skirt",
    translation: "юбка",
    image: "/skirt.jpg",
    audioSrc: "audio/skirt.mp3",
  },
  {
    word: "pants",
    translation: "брюки",
    image: "/pants.jpg",
    audioSrc: "audio/pants.mp3",
  },
  {
    word: "blouse",
    translation: "блузка",
    image: "/blouse.jpg",
    audioSrc: "audio/blouse.mp3",
  },
  {
    word: "dress",
    translation: "платье",
    image: "/dress.jpg",
    audioSrc: "audio/dress.mp3",
  },
  {
    word: "boot",
    translation: "ботинок",
    image: "/boot.jpg",
    audioSrc: "audio/boot.mp3",
  },
  {
    word: "shirt",
    translation: "рубашка",
    image: "/shirt.jpg",
    audioSrc: "audio/shirt.mp3",
  },
  {
    word: "coat",
    translation: "пальто",
    image: "/coat.jpg",
    audioSrc: "audio/coat.mp3",
  },
  {
    word: "shoe",
    translation: "туфли",
    image: "/shoe.jpg",
    audioSrc: "audio/shoe.mp3",
  },
];
//---Emotions--
const emotions = [
  {
    word: "sad",
    translation: "грустный",
    image: "/sad.jpg",
    audioSrc: "audio/sad.mp3",
  },
  {
    word: "angry",
    translation: "сердитый",
    image: "/angry.jpg",
    audioSrc: "audio/angry.mp3",
  },
  {
    word: "happy",
    translation: "счастливый",
    image: "/happy.jpg",
    audioSrc: "audio/happy.mp3",
  },
  {
    word: "tired",
    translation: "уставший",
    image: "/tired.jpg",
    audioSrc: "audio/tired.mp3",
  },
  {
    word: "surprised",
    translation: "удивлённый",
    image: "/surprised.jpg",
    audioSrc: "audio/surprised.mp3",
  },
  {
    word: "scared",
    translation: "испуганный",
    image: "/scared.jpg",
    audioSrc: "audio/scared.mp3",
  },
  {
    word: "smile",
    translation: "улыбка",
    image: "/smile.jpg",
    audioSrc: "audio/smile.mp3",
  },
  {
    word: "laugh",
    translation: "смех",
    image: "/laugh.jpg",
    audioSrc: "audio/laugh.mp3",
  },
];
//---Action 1--
const action_1 = [
  {
    word: "cry",
    translation: "плакать",
    image: "/cry.jpg",
    audioSrc: "audio/cry.mp3",
  },
  {
    word: "dance",
    translation: "танцевать",
    image: "/dance.jpg",
    audioSrc: "audio/dance.mp3",
  },
  {
    word: "dive",
    translation: "нырять",
    image: "/dive.jpg",
    audioSrc: "audio/dive.mp3",
  },
  {
    word: "draw",
    translation: "рисовать",
    image: "/draw.jpg",
    audioSrc: "audio/draw.mp3",
  },
  {
    word: "fish",
    translation: "ловить рыбу",
    image: "/fish.jpg",
    audioSrc: "audio/fish.mp3",
  },
  {
    word: "fly",
    translation: "летать",
    image: "/fly.jpg",
    audioSrc: "audio/fly.mp3",
  },
  {
    word: "hug",
    translation: "обнимать",
    image: "/hug.jpg",
    audioSrc: "audio/hug.mp3",
  },
  {
    word: "jump",
    translation: "прыгать",
    image: "/jump.jpg",
    audioSrc: "audio/jump.mp3",
  },
];
//---Action 2--
const action_2 = [
  {
    word: "open",
    translation: "открывать",
    image: "/open.jpg",
    audioSrc: "audio/open.mp3",
  },
  {
    word: "play",
    translation: "играть",
    image: "/play.jpg",
    audioSrc: "audio/play.mp3",
  },
  {
    word: "point",
    translation: "указывать",
    image: "/point.jpg",
    audioSrc: "audio/point.mp3",
  },
  {
    word: "ride",
    translation: "ездить",
    image: "/ride.jpg",
    audioSrc: "audio/ride.mp3",
  },
  {
    word: "run",
    translation: "бегать",
    image: "/run.jpg",
    audioSrc: "audio/run.mp3",
  },
  {
    word: "sing",
    translation: "петь",
    image: "/sing.jpg",
    audioSrc: "audio/sing.mp3",
  },
  {
    word: "skip",
    translation: "прыгать",
    image: "/skip.jpg",
    audioSrc: "audio/skip.mp3",
  },
  {
    word: "swim",
    translation: "плавать",
    image: "/swim.jpg",
    audioSrc: "audio/swim.mp3",
  },
];
//---Foods--
const foods = [
  {
    word: "burger",
    translation: "бургер",
    image: "/burger.png",
    audioSrc: "audio/burger.mp3",
  },
  {
    word: "cheese",
    translation: "сыр",
    image: "/cheese.png",
    audioSrc: "audio/cheese.mp3",
  },
  {
    word: "donut",
    translation: "пончик",
    image: "/donut.png",
    audioSrc: "audio/donut.mp3",
  },
  {
    word: "egg",
    translation: "яйцо",
    image: "/egg.png",
    audioSrc: "audio/egg.mp3",
  },
  {
    word: "fries",
    translation: "картофель фри",
    image: "/fries.png",
    audioSrc: "audio/fries.mp3",
  },
  {
    word: "muffin",
    translation: "булочка",
    image: "/muffin.png",
    audioSrc: "audio/muffin.mp3",
  },
  {
    word: "noddles",
    translation: "узелки",
    image: "/noodles.png",
    audioSrc: "audio/noodles.mp3",
  },
  {
    word: "sandwich",
    translation: "бутерброд",
    image: "/sandwich.png",
    audioSrc: "audio/sandwich.mp3",
  },
];
