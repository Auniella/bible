let btn_mode, isNight;
const linkElement = document.querySelector('link[rel="stylesheet"]');

window.onload = function () {
  btn_mode = document.getElementById("mode");
  isNight = false;

  btn_mode.addEventListener("click", () => {
    isNight = !isNight;
    isNight
      ? (linkElement.href = "main-styles-night.css")
      : (linkElement.href = "main-styles-day.css");
    isNight
      ? (btn_mode.innerHTML = '<i class="fa-solid fa-moon"></i>')
      : (btn_mode.innerHTML = '<i class="fa-solid fa-sun"></i>');
  });
};
