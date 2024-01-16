const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove('menu-active')
});