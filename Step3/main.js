/* Задание на урок:
1) Первую часть задания повторить по уроку


2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы


3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres


P.S. Функции вызывать не обязательно */

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Информация приватна');
    }
}

showMyDB();

function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        let lastFilm = prompt('Один из просмотренных фильмов?', ''),
            scoreFilm = prompt('На сколько оцените его?', '');
        if (lastFilm != null & lastFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = scoreFilm;
        } else {
            console.log('ERROR');
            i--;
        }
    }
}

// rememberMyFilms();

function detectedPersonalScore() {
    if (personalMovieDB.count < 10) {
        confirm('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        confirm('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        confirm('Вы киноман');
    } else {
        confirm('Произошла ошибка!!');
    }
}

// detectedPersonalScore();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр фильмa под номером ${i}`, '');
    }
}

writeYourGenres();


// let count = 0;
// while (count < 2) {
//     let lastFilm = prompt('Один из просмотренных фильмов?', ''),
//         scoreFilm = prompt('На сколько оцените его?', '');
//     if (lastFilm != null & lastFilm != '' && lastFilm.length < 50) {
//         personalMovieDB.movies[lastFilm] = scoreFilm;
//     } else {
//         console.log('ERROR');
//         count--;
//     }
//     count++;
// }