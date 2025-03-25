// import '../sass/styles.scss';

// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.menu'),
//     closeElem = document.querySelector('.menu__close'),
//     menuLinks = document.querySelectorAll('.menu__link'), // Все ссылки в меню
//     overlay = document.querySelector('.menu__overlay');  // Элемент затемняющего фона

// // Открытие меню при клике на гамбургер
// hamburger.addEventListener('click', (event) => {
//     event.stopPropagation(); // Предотвращаем распространение события на document
//     menu.classList.add('active');
// });

// // Закрытие меню по клику на крестик
// if (closeElem) {
//     closeElem.addEventListener('click', (event) => {
//         event.stopPropagation(); // Блокируем распространение на document
//         menu.classList.remove('active');
//     });
// }

// // Закрытие меню при клике на ссылку в меню
// menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         menu.classList.remove('active');
//     });
// });

// // Закрытие меню при клике на overlay (затемненный фон)
// if (overlay) {
//     overlay.addEventListener('click', () => {
//         menu.classList.remove('active');
//     });
// }

// // Заполнение колонок со скилами полоска
// const counters = document.querySelectorAll('.ability__card-total'),
//     lines = document.querySelectorAll('.ability__card-line span');

// counters.forEach((item, i) => {
//     lines[i].style.width = item.innerHTML;
// });



// import '../sass/styles.scss';

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger'),
//         menu = document.querySelector('.menu'),
//         closeElem = document.querySelector('.menu__close');

//     // Открытие меню
//     if (hamburger && menu) {
//         hamburger.addEventListener('click', () => {
//             menu.classList.add('active');
//         });
//     }

//     // Закрытие по клику на крестик
//     if (closeElem && menu) {
//         closeElem.addEventListener('click', () => {
//             menu.classList.remove('active');
//         });
//     }

//     // Закрытие при клике вне меню
//     if (menu && hamburger) {
//         document.addEventListener('click', (event) => {
//             if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
//                 menu.classList.remove('active');
//             }
//         });
//     }

//     // Заполнение колонок со скилами
//     const counters = document.querySelectorAll('.ability__card-total'),
//         lines = document.querySelectorAll('.ability__card-line span');

//     if (counters.length > 0 && lines.length > 0) {
//         counters.forEach((item, i) => {
//             const value = item.innerHTML.trim(); // Убираем пробелы
//             if (value.endsWith('%')) {
//                 lines[i].style.width = value; // Устанавливаем ширину
//             } else {
//                 console.error(`Некорректное значение: ${value}`);
//             }
//         });
//     }
// });



const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Добавляем класс visible, когда элемент видим
            observer.unobserve(entry.target); // Останавливаем наблюдение за элементом
        }
    });
}, { threshold: 0.5 }); // Элемент становится видимым, когда 50% его области находится в пределах окна

// Наблюдаем за всеми элементами time__item
const timeItems = document.querySelectorAll('.time__item');
timeItems.forEach(item => {
    observer.observe(item); // Наблюдаем за каждым элементом time__item
});

// Наблюдаем за всеми элементами circle (для кругов)
const colorCircles = document.querySelectorAll('.circle');
colorCircles.forEach(circle => {
    observer.observe(circle); // Наблюдаем за каждым элементом circle
});

