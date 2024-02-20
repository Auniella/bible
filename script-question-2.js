let btn_mode, btn_left, paragraph_texte, verse_text, btn_right, numero, isNight;
const linkElement = document.querySelector('link[rel="stylesheet"]');
const quotes = [
  {
    text: "« Il faudra que tu parles constamment de ce qui est écrit dans ce livre de la Loi ; il faudra que tu le lises à voix basse jour et nuit, afin de respecter soigneusement tout ce qui est écrit dedans ; car alors tu réussiras ta vie et tu agiras avec sagesse. »",
    verse: "Josué 1:8",
  },
  {
    text: " « Ils lisaient le livre, la Loi du vrai Dieu, à voix haute. Ils l’expliquaient clairement et en donnaient le sens. C’est ainsi qu’ils aidèrent le peuple à comprendre ce qui était lu. »",
    verse: "Néhémie 8:8",
  },
  {
    text: "« Heureux l’homme qui ne marche pas selon le conseil des méchants [...]. Mais son plaisir est dans la loi de Jéhovah, et il lit sa loi à voix basse jour et nuit. [...] Tout ce qu’il fait réussira. »",
    verse: "Psaume 1:1-3",
  },
  {
    text: "« En courant à côté du char, Philippe entendit l’Éthiopien qui lisait à voix haute le prophète Isaïe. Il lui demanda : “Comprends-tu vraiment ce que tu lis ?” Il répondit : “Mais comment pourrais-je comprendre, si personne ne me guide ?” »",
    verse: "Actes 8:30, 31",
  },
  {
    text: "« Ses qualités invisibles, oui sa puissance éternelle et sa Divinité, se voient clairement depuis que le monde a été créé, parce qu’elles se remarquent dans les choses qu’il a faites. Ils n’ont donc aucune excuse. »",
    verse: "Romains 1:20",
  },
  {
    text: "« Réfléchis à ces choses ; absorbe-toi en elles, pour que tes progrès soient évidents pour tous. »",
    verse: "1 Timothée 4:15",
  },
  {
    text: "« Soucions-nous les uns des autres pour nous inciter à l’amour et aux belles œuvres ; n’abandonnons pas nos réunions. »",
    verse: "Hébreux 10:24, 25",
  },
  {
    text: "« Si donc l’un de vous manque de sagesse, qu’il la demande constamment à Dieu, car il donne à tous généreusement et sans faire de reproche, et elle lui sera donnée. »",
    verse: "Jacques 1:5",
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
  if (numero > 7) {
    numero = 0;
  }
  if (numero < 0) {
    numero = 7;
  }
  paragraph_texte.classList.add("auto_write");
  verse_text.classList.add("auto_write");
  paragraph_texte.innerText = quotes[numero].text;
  verse_text.innerText = quotes[numero].verse;
}
