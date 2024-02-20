let btn_mode, btn_left, paragraph_texte, verse_text, btn_right, numero, isNight;
const linkElement = document.querySelector('link[rel="stylesheet"]');
const quotes = [
  {
    text: "« Que tous sachent que toi, dont le nom est Jéhovah, tu es, toi seul, le Très-Haut sur toute la terre ! »",
    verse: "Psaume 83:18",
  },
  {
    text: "« Sachez que Jéhovah est Dieu. C’est lui qui nous a faits, et nous lui appartenons. »",
    verse: "Psaume 100:3",
  },
  {
    text: "« Je suis Jéhovah. C’est là mon nom ; je ne donne ma gloire à personne ni ma louange aux statues. »",
    verse: "Isaïe 42:8",
  },
  {
    text: "« Tous ceux qui feront appel au nom de Jéhovah seront sauvés. »",
    verse: "Romains 10:13",
  },
  {
    text: "« Toute maison est construite par quelqu’un, et celui qui a construit toutes choses, c’est Dieu. »",
    verse: "Hébreux 3:4",
  },
  {
    text: "« Levez vos yeux vers le ciel et voyez. Qui a créé ces choses ? C’est Celui qui les fait sortir comme une armée, chacune d’elles par son numéro ; il les appelle toutes par leur nom. Du fait de sa colossale énergie vive et de sa force impressionnante, pas une ne manque. »",
    verse: "Isaïe 40:26",
  },
];

window.onload = function () {
  btn_mode = document.getElementById("mode");
  btn_left = document.getElementById("left");
  paragraph_texte = document.getElementById("texte");
  verse_text = document.getElementById("verset");
  btn_right = document.getElementById("right");
  numero = 0;
  isNight = false;

  btn_mode.addEventListener("click", () => {
    isNight = !isNight;
    isNight
      ? (linkElement.href = "styles-night.css")
      : (linkElement.href = "styles-day.css");
    isNight
      ? (btn_mode.innerHTML = '<i class="fa-solid fa-moon"></i>')
      : (btn_mode.innerHTML = '<i class="fa-solid fa-sun"></i>');
  });

  btn_left.addEventListener("click", function () {
    changeQuote(-1);
  });
  btn_right.addEventListener("click", function () {
    changeQuote(1);
  });
};

function changeQuote(sens) {
  numero = numero + sens;
  if (numero > 5) {
    numero = 0;
  }
  if (numero < 0) {
    numero = 5;
  }
  paragraph_texte.classList.add("auto_write");
  verse_text.classList.add("auto_write");
  paragraph_texte.innerText = quotes[numero].text;
  verse_text.innerText = quotes[numero].verse;
}
