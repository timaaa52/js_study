/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    confirm('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    confirm('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    confirm('Вы киноман');
} else {
    confirm('Произошла ошибка!!');
}

// for (let i = 0; i < 1; i++) {
//     let lastFilm = prompt('Один из просмотренных фильмов?', ''),
//         scoreFilm = prompt('На сколько оцените его?', '');
//     if (lastFilm != null & lastFilm != '' && lastFilm.length < 50) {
//         personalMovieDB.movies[lastFilm] = scoreFilm;
//     } else {
//         console.log('ERROR');
//         i--;
//     }
// }

let count = 0;
while (count < 2) {
    let lastFilm = prompt('Один из просмотренных фильмов?', ''),
        scoreFilm = prompt('На сколько оцените его?', '');
    if (lastFilm != null & lastFilm != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = scoreFilm;
    } else {
        console.log('ERROR');
        count--;
    }
    count++;
}

console.log(personalMovieDB);