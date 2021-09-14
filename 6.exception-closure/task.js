const parseCount = function (val) {
  val = +val;
  if (isNaN(val)) throw new Error("Невалидное значение");
  return val;
};
const validateCount = function (val) {
  try {
    val = parseCount(val);
  } catch (e) {
    return e;
  }
  return val;
};

class Triangle {
  constructor(a, b, c) {
    if (!(a + b > c && a + c > b && c + b > a)) throw new Error("Треугольник с такими сторонами не существует")

    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    let { a, b, c } = this;
    return a + b + c;
  }
  getArea() {
    let { a, b, c } = this;
    let p = this.getPerimeter() / 2;
    return +Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
  }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует'
      },
      getArea() {
        return 'Ошибка! Треугольник не существует';
      }
    };
  }
}
