// Age Calculator Code

function calculateAge() {
  let birthYear = prompt("Enter your birth year: ");
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  if (age < 0) {
    console.log("You haven't been born yet!");
  } else if (age === 0) {
    console.log("You are less than a year old!");
  } else {
    console.log(`You are ${age} years old.`);
  }
}

// Ask user to calculate age
console.log("Welcome to the Age Calculator!");
calculateAge();

// Ask user if they want to calculate age again
let again = prompt("Do you want to calculate your age again? (yes/no): ");
if (again.toLowerCase() === "yes") {
  calculateAge();
} else {
  console.log("Goodbye!");
}
