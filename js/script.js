"use strict";
//1
// const birthday = new Date(1990, 1, 25);
// console.log(birthday);
// console.log(`${birthday.getDate()}.0${birthday.getMonth()+1}.${birthday.getFullYear()}`);

//2
// function getDiffDays(startDate, endDate) {
//   const DAY = 1000 * 60 * 60 * 24;
//   let start = new Date(startDate);
//   let end = new Date(endDate);
//   if (Date.parse(start) > Date.parse(end)) {
//     return("Error: your start date is later than end");
//   }
//   else if (start.toString() === "Invalid Date"|| end.toString() === "Invalid Date"){
//     return("Error: invalid date");
//   }
//   else {
//     return (Date.parse(end) - Date.parse(start)) / DAY;
//   }
// };
// console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
// console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
// console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
// console.log(getDiffDays('2020-03-15', '2222222222')); // Error: invalid date
// console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end

//3
// function isWeekend(dateValue) {
//   let date = new Date (dateValue);
//   let day = date.getDay();
//   if (day == 6){
//     return true;
//   }
//   else if (day == 0){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(isWeekend('2022-08-19'));

//4
// const person = {
//   fullName: 'Sherlock Holmes',
//   address: {
//     street: "Baker Street",
//     city: "London",
//     house: "221b"
//   }
// }
// const personString = JSON.stringify(person);
// console.log(personString);
// const personObject = JSON.parse(personString);
// console.log(personObject);
// const {fullName} = person;
// console.log(fullName);
// const {street} = person.address;
// console.log(street);
// const {city} = person.address;
// console.log(city);
// const {house} = person.address;
// console.log(house);