// Сюда подключаются модульные файлы по определенным темам, которые находятся в папке modules
import {Student, WebStudent, Post} from "./modules/OOP.js"; // Урок про ООП

// Урок про ООП
const student = new Student('Олег', 23, 'Python-программист');
const webStudent = new WebStudent('Иван', 24);

// console.log(webStudent.getInfo())
// webStudent.sayHello();
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if(!res.ok) {
      throw new Error('Произошла ошибка запроса постов')
    }
    return res.json()
  })
  .then(data => {
    console.log(data)
    data.forEach(el => {
      document.querySelector('.body').append(new Post(el.title).getPost());
    })
  })
  .catch(err => {
    console.log(err.message)
  })


