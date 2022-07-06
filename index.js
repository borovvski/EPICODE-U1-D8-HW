/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("-----EXERCISE 1-----\n");
let arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers);
console.log("\n");
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("-----EXERCISE 2-----\n");
let person = {
  firstName: "Brandon",
  lastName: "Borowski",
  emailAdress: "brandonborovvski@gmail.com",
  age: 28,
};
console.log(person);
console.log("\n");
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("-----EXERCISE 3-----\n");
person.hasDrivingLicense = true;
console.log(person);
console.log("\n");
/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("-----EXERCISE 4-----\n");
delete person.age;
console.log(person);
console.log("\n");
/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("-----EXERCISE 5-----\n");

let person2 = {};

Object.assign(person2, person, {
  firstName: "Jan",
  lastName: "Kowalski",
  emailAdress: "janekkowalski@gmail.com",
});
console.log(person2);
console.log(
  "The email adresses of two persons are diferent:",
  person.emailAdress !== person2.emailAdress
);

console.log("\n");
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log("-----EXERCISE 6-----\n");

let totalShoppingCart = 99;
let shippingCost = 10;

console.log("You spent:", totalShoppingCart);

if (totalShoppingCart > 50) {
  console.log("You are eligible for a free shipping!");
} else {
  totalShoppingCart += shippingCost;
}

console.log("\n");
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("-----EXERCISE 7-----\n");
console.log("Today is Black Friday and everything has a 20% discount!");

let discountedTotalShoppingCart = totalShoppingCart - totalShoppingCart * 0.2;
let discountedShippingCost = shippingCost - shippingCost * 0.2;
console.log("You spent:", discountedTotalShoppingCart);

if (discountedTotalShoppingCart > 50) {
  console.log("You are eligible for a free shipping!");
} else {
  discountedTotalShoppingCart += discountedShippingCost;
}

console.log("\n");
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("-----EXERCISE 8-----\n");
let autoMobile = {
  brand: "MercedesBenz",
  model: "G63",
  licensePlate: "NOM 72245",
};
console.log(autoMobile);
let autoMobile2 = Object.assign({}, autoMobile, { licensePlate: "NOM 72523" });
console.log(autoMobile2);
let autoMobile3 = Object.assign({}, autoMobile, { licensePlate: "NOM 42323" });
console.log(autoMobile3);
let autoMobile4 = Object.assign({}, autoMobile, { licensePlate: "NOM 72537" });
console.log(autoMobile4);
let autoMobile5 = Object.assign({}, autoMobile, { licensePlate: "NOM 15423" });
console.log(autoMobile5);
let autoMobile6 = Object.assign({}, autoMobile, { licensePlate: "NOM 75243" });
console.log(autoMobile6);
console.log("\n");
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log("-----EXERCISE 9-----\n");
let carsForRent = [
  autoMobile,
  autoMobile2,
  autoMobile3,
  autoMobile4,
  autoMobile5,
  autoMobile6,
];
console.log(carsForRent);
console.log("\n");
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log("-----EXERCISE 10-----\n");

carsForRent.shift();
carsForRent.pop();

console.log(carsForRent);

console.log("\n");
/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("-----EXERCISE 11-----\n");
console.log(`The type of the car:`, autoMobile.model);
console.log(`The plates have numbers:`, autoMobile.licensePlate);
console.log(`The brand of the car is:`, autoMobile.brand);
console.log("\n");

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("-----EXERCISE 12-----\n");

let carsForSale = [];
carsForSale.push(autoMobile5, autoMobile4, autoMobile3);
console.log(carsForSale);
console.log("\n");

let totalCars = carsForRent.concat(carsForSale);
console.log(
  `Altogether, there is ${carsForRent.length + carsForSale.length} cars!`
);
console.log("\n");
/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("-----EXERCISE 13-----\n");

for (let i = 0; i < carsForSale.length; i++) {
  console.log(
    "Car data:",
    carsForSale[i].brand,
    carsForSale[i].model,
    carsForSale[i].licensePlate
  );
}

console.log("\n");
