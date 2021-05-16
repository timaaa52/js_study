// Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// Сколько фильмов вы уже посмотрели?

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '5');
console.log(numberOfFilms);

// Создать обьект personalMovieDB и в него поместить такие свойства:
//  - count - сюда передается ответ на первый вопрос
//  - movies - в это свойство поместить пустой обьект
//  - actors - тоже поместить пустой обьект
//  - genres - поместить пустой массив
//  - private - в это свойство поместить boolean значение false

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// Задайте пользователю по два раза вопросы:
//  - "Один из просмотреных фильмов?"
//  - "На сколько оцените его?"
// Ответы стоит поместить в отдельные переменные
// Записать ответы в обьект movies в формате:
//  movies: {
//        'logan': '8.1'
//    }

let lastFilm = prompt('Один из просмотренных фильмов?', ''),
    scoreFilm = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = scoreFilm;

lastFilm = prompt('Один из просмотренных фильмов?', '');
scoreFilm = prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm] = scoreFilm;
console.log(personalMovieDB);