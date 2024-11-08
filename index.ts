
// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output: 15

// Problem 2:
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(arr: number[]): number[] {
  let uniqueArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
// [1, 2, 3, 4, 5]

// Problem 3:
// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences(sentence: string, word: string): number {
  let count = 0;
  let lowerSentence = sentence.toLowerCase();
  let lowerWord = word.toLowerCase();
  let words = lowerSentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] === lowerWord) {
      count++;
    }
  }
  return count;
}

// Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output: 2;

// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };

function calculateShapeArea(shape: Circle | Rectangle): number {
  if (shape.shape === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }else{
    throw new Error("Invalid shape type");
  }
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1: 78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2: 24;

// Problem 5:
// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Hints: Use keyof

function getProperty<T, K extends keyof T>(obj: T, prop: K): T[K] {
  return obj[prop];
}

// Sample Input:
const person1 = { name: "Alice", age: 30 };
console.log(getProperty(person1, "name"));

// Sample Output: Alice;

// Problem 6:
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  return {...profile,...updates };
}


// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }


// Problem 7:
// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}


// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:n6 (assuming current year is 2024)

// Problem 8:
// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  return keys.every((key) => key in obj);
}

// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output: true;
