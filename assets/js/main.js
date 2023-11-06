"use strict"

new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
});

//Меню 

const hamb = document.querySelector('.hamb__field');
const menu = document.querySelector('.header__mobile-wrapper');
const body = document.body;


const menuLink = document.querySelector(".header__mobile-nav");

hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  hamb.classList.toggle("hamb__field-active");
  menu.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  menu.appendChild(menuLink);
}
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  hamb.classList.toggle("hamb__field-active");
  menu.classList.toggle("active");
  body.classList.toggle("noscroll");
}




//Показать еще

const btn = document.querySelector('.btn-show');
const cards = Array.from(document.querySelectorAll('.card'));

window.addEventListener('resize', event => {
  if (event.target.window.innerWidth > 768) response1();
  if (event.target.window.innerWidth < 768) response2();
})

// Скрывает кнопку
function openCaralog() {
  btn.addEventListener('click', () => {
    cards.forEach(item => item.classList.remove('hidden'));
    // btn.classList.add('hidden'); // вот тут
  })
}

function response1() {
  if (window.innerWidth > 1200) {
    // btn.classList.add('hidden'); Скрывает кнопку

    cards.forEach((item, index) => {
      item.classList.add('hidden')
        if (index <= 3 ) {   //8
          item.classList.remove('hidden') 
        } else if (index > 3) {  // 8
          btn.classList.remove('hidden');
        }
        openCaralog()
    })
  }
}
response1()

function response2() {
  if (window.innerWidth <= 1200) {
    // btn.classList.add('hidden'); Скрывает кнопку

    cards.forEach((item, index) => {
      item.classList.add('hidden')
        if (index <= 2 ) {   //8
          item.classList.remove('hidden') 
        } else if (index > 2) {  // 8
          btn.classList.remove('hidden');
        }
        openCaralog()
    })
  }
}
response2()