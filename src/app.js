document.querySelectorAll(".navbar-nav>li>a").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});

window.onload = function () {
  var img = new Image();
  img.onload = function () {
    document.getElementById("about").style.backgroundImage =
      "url('https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/288/original/duotone_keyboard_hand.png?1702638653')";
  };
  img.src = "pictures/duotone_keyboard_hand.png";
};
