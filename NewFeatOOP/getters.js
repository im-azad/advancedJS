class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  //Getter for the diameter
  /**
   * @returns {any}
   */
  get diameter() {
    return this._radius * 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // 10
