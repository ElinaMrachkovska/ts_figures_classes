export type Shape =
  | { kind: 'triangle'; a: number; b: number; c: number }
  | { kind: 'circle'; r: number }
  | { kind: 'rectangle'; width: number; height: number };

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: { kind: 'triangle'; a: number; b: number; c: number };

  color: Color;

  constructor(a: number, b: number, c: number, color: Color) {
    
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Неправильні сторони трикутника');
    }

    this.shape = { kind: 'triangle', a, b, c };
    this.color = color;
  }

  getArea(): number {
    const { a, b, c } = this.shape;
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export class Circle implements Figure {
  shape: { kind: 'circle'; r: number };
  color: Color;

  constructor(r: number, color: Color) {
    if (r <= 0) {
      throw new Error('Радіус має бути > 0');
    }

    this.shape = { kind: 'circle', r };
    this.color = color;
  }

  getArea(): number {
    return Math.PI * this.shape.r ** 2;
  }
}

export class Rectangle implements Figure {
  shape: { kind: 'rectangle'; width: number; height: number };
  color: Color;

  constructor(width: number, height: number, color: Color) {
    if (width <= 0 || height <= 0) {
      throw new Error('Сторони мають бути > 0');
    }

    this.shape = { kind: 'rectangle', width, height };
    this.color = color;
  }

  getArea(): number {
    const { width, height } = this.shape;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return typeof figure;
}
