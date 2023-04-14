// Create a variable called "num" and assign it a value of your choice.
const num = 16;

// Calculate the square root of "num" and display the result.
const squareRoot = Math.sqrt(num);
console.log(`The square root of ${num} is ${squareRoot}.`);

// Generate a random number between 0 and 1, multiply by 10, round to nearest whole number, and display the result.
const randomNum = Math.round(Math.random() * 10);
console.log(`A random number between 0 and 10 is ${randomNum}.`);

// Create a new date object called "today" and display the current date and time.
const today = new Date();
console.log(`Today is ${today}.`);

// Extract and display the year, month, day of the month, and day of the week from the "today" object.
const year = today.getFullYear();
const month = today.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index
const dayOfMonth = today.getDate();
const dayOfWeek = today.getDay(); // Returns a number representing the day of the week (0 for Sunday, 1 for Monday, etc.)
console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day of the month: ${dayOfMonth}`);
console.log(`Day of the week: ${dayOfWeek}`);

// Set the year to 2022, month to December, and day of the month to 31 in the "today" object.
today.setFullYear(2022);
today.setMonth(11); // 11 represents December (because getMonth() returns a zero-based index)
today.setDate(31);

// Extract and display the updated year, month, and day of the month from the "today" object.
const updatedYear = today.getFullYear();
const updatedMonth = today.getMonth() + 1;
const updatedDayOfMonth = today.getDate();
console.log(`Updated year: ${updatedYear}`);
console.log(`Updated month: ${updatedMonth}`);
console.log(`Updated day of the month: ${updatedDayOfMonth}`);

// Create a new date object called "birthday" and set it to your own birthday.
const birthday = new Date('1990-01-01');

// Calculate the number of milliseconds between the "birthday" object and the "today" object and display the result.
const millisecondsDiff = today.getTime() - birthday.getTime();
console.log(`The number of milliseconds between my birthday and today is ${millisecondsDiff}.`);

// Calculate the number of days between the "birthday" object and the "today" object and display the result.
const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
console.log(`The number of days between my birthday and today is ${daysDiff}.`);
