class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(val) {
    this._state = val >= 100 ? 100 : val === 0 ? 0 : val;
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book?.state > 30) this.books.push(book);
  }
  findBookBy(type, value) {
    return this.books.reduce((ac, cur) => {
      if (cur[type] === value) ac = cur;
      return ac;
    }, null);
  }
  giveBookByName(bookName) {
    let book = this.findBookBy("name", bookName);
    if (book !== null) this.books.splice(this.books.indexOf(book), 1);
    return book;
  }
  
}

//Задача 3

class Student {
  constructor(name) {
    this.name = name;
    this.subjects={}
  }
  addMark(num,subject){
    if(num >=1 && num <=5) {
      if(this.subjects[subject]) this.subjects[subject].push(+num)
      else {
        this.subjects[subject] = [];
        this.subjects[subject].push(+num)
      }
    }
  }
  getAverageBySubject(subject){
    if(this.subjects[subject]) {
      return this.subjects[subject].reduce((ac,val)=>ac+=+val,0)/this.subjects[subject].length;
    } 
  }
  getAverage(){
    let s = this.subjects;
    let subjs = Object.keys(s);
    return subjs.reduce((ac,sub)=>{
      ac+=s[sub].reduce((ac,val)=>ac+=val,0)/s[sub].length
      return ac;
    },0)/subjs.length;
  }
}
