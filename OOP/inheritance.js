class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `I am a triangle with area of ${this.getArea()}`; // when call method inside a class always call it {this.methodName()}
  }
}

class ChildTriangle extends Triangle {
  // inheritance constructor
  describe() {
    return `I am a Child triangle of Triangle `; 
  }
  sayHi() {
    return " Hi this is from child triangle";
  }
}
