// var exchangeRates = {
//     dollar: 0.011, 
//     euro: 0.010  
//   };
  
//   function convertCurrency() {
//     var rubles = parseFloat(prompt("Введите сумму в рублях:"));
    
//     if (isNaN(rubles) || rubles < 0) {
//       alert("Пожалуйста, введите положительное число!");
//       return;
//     }
    
//     var currency = prompt("Выберите валюту (доллар или евро):").toLowerCase();
    
//     if (currency in exchangeRates) {
//       var result = rubles * exchangeRates[currency];
//       var currencyName = currency === 'dollar' ? 'долларов' : 'евро';
//       alert(rubles + " рублей = " + result.toFixed(2) + " " + currencyName);
//     } else {
//       alert("Выбрана неверная валюта!");
//     }
//   }
  
//   convertCurrency();









// var books = [];
// function addBook() {
//   var title = prompt("Введите название книги:");
//   if (title === null) return;
  
//   var author = prompt("Введите автора книги:");
//   if (author === null) return;
  
//   var genre = prompt("Введите жанр книги:");
//   if (genre === null) return;
  
//   var ratingInput = prompt("Введите оценку от 1 до 5:");
//   if (ratingInput === null) return;
  
//   var rating = parseInt(ratingInput);
  
//   // Проверка оценки
//   if (isNaN(rating)  rating < 1  rating > 5) {
//     alert("Оценка должна быть числом от 1 до 5!");
//     return;
//   }
  
//   books.push({
//     title: title,
//     author: author,
//     genre: genre,
//     rating: rating
//   });
  
//   alert("Книга успешно добавлена!");
// }

// function filterBooks() {
//   var filterBy = prompt("Фильтровать по жанру или оценке? (введите 'жанр' или 'оценка')");
//   if (filterBy === null) return;
  
//   filterBy = filterBy.toLowerCase();
  
//   if (filterBy === 'жанр') {
//     var genre = prompt("Введите жанр для фильтрации:");
//     if (genre === null) return;
    
//     var filtered = [];
//     for (var i = 0; i < books.length; i++) {
//       if (books[i].genre.toLowerCase() === genre.toLowerCase()) {
//         filtered.push(books[i]);
//       }
//     }
//     displayBooks(filtered);
//   } 
//   else if (filterBy === 'оценка') {
//     var ratingInput = prompt("Введите минимальную оценку (1-5):");
//     if (ratingInput === null) return;
    
//     var rating = parseInt(ratingInput);
//     if (isNaN(rating)  rating < 1  rating > 5) {
//       alert("Неверная оценка! Должна быть от 1 до 5");
//       return;
//     }
    
//     var filtered = [];
//     for (var i = 0; i < books.length; i++) {
//       if (books[i].rating >= rating) {
//         filtered.push(books[i]);
//       }
//     }
//     displayBooks(filtered);
//   } 
//   else {
//     alert("Неверный критерий фильтрации! Введите 'жанр' или 'оценка'");
//   }
// }

// function displayBooks(booksToDisplay) {
//   if (booksToDisplay.length === 0) {
//     alert("Книги не найдены!");
//     return;
//   }
  
//   var message = "Список книг:\n\n";
//   for (var i = 0; i < booksToDisplay.length; i++) {
//     var book = booksToDisplay[i];
//     message += "Название: " + book.title + "\n";
//     message += "Автор: " + book.author + "\n";
//     message += "Жанр: " + book.genre + "\n";
//     message += "Оценка: " + book.rating + "\n\n";
//   }
  
//   alert(message);
// }

// function mainMenu() {
//   while (true) {
//     var choice = prompt(
//       "Выберите действие:\n" +
//       "1 - Добавить книгу\n" +
//       "2 - Фильтровать книги\n" +
//       "3 - Показать все книги\n" +
//       "4 - Выйти"
//     );
    
//     if (choice === null) choice = "4";
    
//     switch (choice) {
//       case '1':
//         addBook();
//         break;
//       case '2':
//         filterBooks();
//         break;
//       case '3':
//         displayBooks(books);
//         break;
//       case '4':
//         return;
//       default:
//         alert("Неверный выбор! Введите число от 1 до 4");
//     }
//   }
// }

// mainMenu();