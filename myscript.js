// #1  Write a function  //Weekly

// function calculateFahrenheit (celsius) {
// return (celsius * 9/5) +32
// };

// console.log(calculateFahrenheit(0));

// #2  Write an anonymous function //Weekly

// let calculateFahrenheit = function(celsius) {
// return (celsius * 9/5) + 32
// };

// console.log(calculateFahrenheit(40));

// #3  Write an arrow function  

// let calculateFahrenheit = (celsius) => (celsius * 9/5) + 32;

// console.log(calculateFahrenheit(40));

// #4  Use Map function  //Weekly

// let numbers = [1, 2, 3, 4, 5];

// let numbersSquared = numbers.map(num => num * num);

// console.log(numbersSquared);

// #5  Use Filter Function //Weekly

// let numbers = [1, 2, 3, 4, 5];

// let filteredNumbers = numbers.filter(num => num % 2 === 0);

// console.log(filteredNumbers);

// console.log(numbers);

// #6  Create an object //Weekly

// let person = {
//     fName: 'Scott',
//     age: 40,
//     eyes: 'blue'
// };

// console.log(person);

// console.log(typeof person);

// console.log(person.length);

//#7 Destructure an array;  //Daily

// let names = ['adam', 'scott', 'eric', 'regan'];

// const [sipherd, brinton,...others] = names;

// console.log(others);

// Destructure an object 

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
  

//   const { firstName, lastName, age, address: { city, country } } = person;

// console.log(firstName);  // Output: John
// console.log(lastName);   // Output: Doe
// console.log(age);        // Output: 30
// console.log(city);       // Output: New York
// console.log(country);    // Output: USA

//#8 useState //Daily 

// const [hello, setHello] = useState('ola');

// const handleClick = () => setHello('bonjour');

//#9 Pass a prop from a parent componenet into a child

// function Title({ title, subtitle})  //this is the child

//<h1>{title}</h1>  //this is the child

// return (
// <Title title="events in your area" />  //This is the parent
//)

//

// 2-18-2024  8/8 100% correct

//2-19-2024

//1/2 50% correct because I put quotes on the variables brinton and sipherd when destructuring the array

