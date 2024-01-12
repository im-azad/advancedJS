class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  /**
   * Setter for the radius
   * set use some logic
   * (_privet don't update)
   * @param {number} value
   */
  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!!");
    } else {
      this._radius = value;
    }
    return this._radius * 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // 10
