abstract class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract render(): void;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number, color: string) {
    super(color);
    this.radius = radius;
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

let shape = new Circle(100, "red");
shape.render();
