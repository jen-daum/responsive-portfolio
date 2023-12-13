document.querySelectorAll(".navbar-nav>li>a").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});
