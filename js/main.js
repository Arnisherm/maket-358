const swiper = new Swiper(".testimonial__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

const iconMenuClose = document.querySelector('.menu__icon-close');
if (iconMenuClose) {
  const menuBody = document.querySelector('.menu-body');
  iconMenuClose.addEventListener("click", function(e) {
    document.body.classList.toggle('.lock');
    iconMenuClose.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

const iconMenu = document.querySelector('.menu__icon');
if (iconMenuClose) {
  const menuBody = document.querySelector('.menu-body');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('.lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}