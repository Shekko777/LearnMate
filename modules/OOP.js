export class Student {
  constructor(name, age, cohort) {
    this._name = name;
    this._age = age;
    this._cohort = cohort;
  }

  getInfo() {
    return {
      name: this._name,
      age: this._age,
      cohort: this._cohort,
    }
  }

  sayHello() {
    console.log('hello world');
  }
}

export class WebStudent extends Student {
  constructor(name, age) {
    super(name, age);
    this._cohort = 'Web Development';
  }

  getInfo() {
    console.log('сделал перегрузку метода')
    return super.getInfo();
  }

  sayHello() {
    super.sayHello();
    console.log('Привет мир')
  }
}

export class Post {
  constructor(text) {
    this._text = text;
  }

  getPost() {
    this.clone = document.querySelector('.template').content.cloneNode(true);
    this.clone.querySelector('.text').textContent = this._text;
    return this.clone;
  }
}