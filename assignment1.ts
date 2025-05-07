function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

interface IFilterByRating {
  title: string;
  rating: number;
}
function filterByRating(items: IFilterByRating[]): IFilterByRating[] {
  return items.filter((item) => item.rating > 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, current) => [...acc, ...current]);
}

class Vehicle {
  constructor(private make: string, private year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number | undefined {
  if (typeof value === "string") {
    return Number(value.length);
  } else if (typeof value === "number") {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length !== 0) {
    const maxPrice = Math.max(...products.map((product) => product.price));
    return products.find((product) => product.price === maxPrice)!;
  } else {
    return null;
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n > 0) {
      setTimeout(function () {
        resolve(n * n);
      }, 1000);
    } else {
      reject(new Error("Negative number not allowed"));
    }
  });
}
