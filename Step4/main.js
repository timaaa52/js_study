/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    showMyDB: function() {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Информация скрыта');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 1; i++) {
            let lastFilm = prompt('Один из просмотренных фильмов?', ''),
                scoreFilm = prompt('На сколько оцените его?', '');
            if (lastFilm != null && lastFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = scoreFilm;
            } else {
                console.log('ERROR');
                i--;
            }
        }
    },
    detectedPersonalScore: function() {
        if (personalMovieDB.count < 10) {
            confirm('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            confirm('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            confirm('Вы киноман');
        } else {
            confirm('Произошла ошибка!!');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 4; i++) {
            let personalGenre = prompt(`Ваш любимый жанр фильмa под номером ${i}`, '');
            if (personalMovieDB != null && personalMovieDB != '') {
                personalMovieDB.genres[i - 1] = personalGenre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((e, i) => {
            console.log(`Любимый жанр №${i+1} - это ${e}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private == true) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    start: function() {
        let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        personalMovieDB.count = numberOfFilms;

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    }

};


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