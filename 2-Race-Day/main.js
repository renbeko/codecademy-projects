let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let age = 19;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 pm.`);
} else {
  console.log("Sorry, but you need to see the registration desk.");
}