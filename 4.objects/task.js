function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks) {
    this.marks.push(mark)
  } else {
    this.marks = [];
    this.marks.push(mark)
  }
}
Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    marks.forEach(e=> this.marks.push(e))
  } else {
    this.marks = [];
    marks.forEach(e=> this.marks.push(e))
  }
}
Student.prototype.getAverage = function () {
  if (this.marks?.length > 0) return this.marks.reduce((ac,val)=> ac+=val,0)/this.marks.length
  else console.log("Оценок нет")
}
Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks
}