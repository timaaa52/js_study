/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};


const promAdv = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    promoInterItems = document.querySelector('.promo__interactive-list');


promAdv.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'драма';

promoBg.style.background = 'url(../img/bg.jpg) center center / cover no-repeat';

promoInterItems.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    promoInterItems.innerHTML += `
		<li class="promo__interactive-item">${i+1}. ${item}
			<div class="delete"></div>
		</li>
	`;
});