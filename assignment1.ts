function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}
const formatStringResult = formatString("Hello", false);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating > 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filteredBooksResult = filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, current) => [...acc, ...current]);
}

const concatenateArraysResult = concatenateArrays([1, 2], [3, 4], [5]);

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

const myCar = new Car("Toyota", 2020, "Corolla");

function processValue(value: string | number): number | undefined {
  if (typeof value === "string") {
    return Number(value.length);
  } else if (typeof value === "number") {
    return value * 2;
  }
}

const processValueResult = processValue("1");
console.log(processValueResult);
