class Circle {
  // static property
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed");
    }
  }

  get radius() {
    return this._radius;
  }
  get color() {
    return this._color;
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

  set color(newColor) {
    this.setColor(newColor);
  }
}

// const circle = new Circle(5);
// console.log(circle.diameter); // 10
