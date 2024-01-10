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

class ColorTriangle extends Triangle {
    constructor (a, b, color) { // add new constructor 
        super(a,b); // super use for inherit parent constructor
        this.color = color;
    }

}
class MoodColorTriangle extends ColorTriangle {
    constructor (a, b, color, mood) { // add new constructor 
        super(a,b,color); // super use for inherit parent constructor
        this.mood = mood;
    }
    colorMood() {
      return "Three class inheritance using super() to parent component"
    }

}
