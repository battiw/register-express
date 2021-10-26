let express = require("express"); //подключаем модуль express

let app = express(); // создаем объект приложения

// определяем обрабтчик статических файлов и папку где они находятся
app.use( express.static(__dirname + "/public"));
// определяем обработчик маршрута "/"
app.get("/", function (request, response) {
  //отправляем на браузер ответ

  response.sendFile(__dirname + '/start.html')
});
// определяем обработчик маршрута "/abuot"

app.get("/inputstaff", function (request, response) {
  //отправляем на браузер ответ
  
  response.sendFile(__dirname + '/indexinput.html')
});
// определяем обработчик маршрута "/contact"
app.get("/searchdata", function (request, response) {
  //отправляем на браузер ответ
  response.send("<h1>Hello contact!!!</h1>");
});

// начинаем прослушивание на порту 8000
app.listen(8000);
