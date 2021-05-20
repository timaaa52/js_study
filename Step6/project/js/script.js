/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Зомби лэнд"
        ]
    };


    const promAdv = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        promoInterItems = document.querySelector('.promo__interactive-list'),
        delFilmItem = document.querySelector('.promo__interactive-list delete'),
        formAdd = document.querySelector('.add'),
        addingInp = formAdd.querySelector('.adding__input'),
        addCheck = formAdd.querySelector('[type="checkbox"]');

    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addingInp.value;
        const checked = addCheck.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createFilmList(movieDB.movies, promoInterItems);
        }

        if (checked) {
            console.log('Добавляем любимый фильм');
        }

        console.log(movieDB);
        e.target.reset();
    });

    delFilmItem.addEventListener('click', () => {

    });

    const removeAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };

    removeAdv(promAdv);

    const makeChanges = () => {
        promoGenre.textContent = 'драма';
        promoBg.style.background = 'url(../img/bg.jpg) center center / cover no-repeat';
    };

    // makeChanges();


    function createFilmList(films, element) {

        element.innerHTML = '';
        films.forEach((item, i) => {
            element.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>
        `;
        });
    }

    createFilmList(movieDB.movies, promoInterItems);

    const sortArr = (arr) => {
        arr.sort();
    };
});