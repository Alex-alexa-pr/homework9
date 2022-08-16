"use strict";

//4
const person = {
  fullName: 'Sherlock Holmes',
  address: {
    street: "Baker Street",
    city: "London",
    house: "221b"
  }
}
const personString = JSON.stringify(person);
console.log(personString);
const personObject = JSON.parse(personString);
console.log(personObject);
const {fullName} = person;
console.log(fullName);
const {street} = person.address;
console.log(street);
const {city} = person.address;
console.log(city);
const {house} = person.address;
console.log(house);