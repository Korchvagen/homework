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

// Код возьмите из предыдущего домашнего задания

'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?");

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },

  rebemberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const filmName = prompt("Один из последних просмотренных фильмов?");
      const filmRating = prompt("На сколько оцените его?");

      if (filmName === "" || filmRating === "" || !filmName || !filmRating || filmName.length > 50) {
        console.log("error");
        i--;
        continue;
      }
      console.log("done");
      this.movies[filmName] = filmRating;
    }
  },

  detectPersonalLevel: function () {
    if (this.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (this.count >= 10 && this.count < 30) {
      console.log("Вы классический зритель");
    } else if (this.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  showMyDB: function (isHidden) {
    if (!isHidden) {
      console.log(this);
    }
  },

  writeYourGenres: function () {
    let genre;

    for (let i = 0; i < 3; i++) {
      genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`);

      if (genre === '' || genre === null) {
        i--;
        continue;
      }

      this.genres[i] = genre;
    }

    this.genres.forEach((item, i) => console.log(`Любимый жанр #${i + 1} - это ${item}`));
  },

  toggleVisibleMyDB: function () {
    this.privat = !this.privat;
  }
}

personalMovieDB.start();

personalMovieDB.rebemberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);