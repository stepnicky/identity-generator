const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Paweł', 'Andrzej', 'Bartłomiej', 'Krzysztof', 'Stefan', 'Marek', 'Dariusz'];
const femaleNames = ['Maria', 'Jadwiga', 'Genowefa', 'Elżbieta', 'Alicja', 'Violetta', 'Julia'];
const lastNames = ['Wichura', 'Nowak', 'Ogórkiewicz', 'Paradys', 'Kiełbasa', 'Zaremba'];

const randChoice = arr => {
    const arrLength = arr.length;
    const randomNumber = Math.floor(Math.random() * arrLength);
    const randomElement = arr.find(element => arr.indexOf(element) === randomNumber);
    return randomElement;
};

let people = [];

for (let i = 0; i < 20; i++ ){
    const person = {};
    person.gender = randChoice(genders);
    if (person.gender === 'F'){
        person.firstName = randChoice(femaleNames);
    } else {
        person.firstName = randChoice(maleNames);
    }
    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random() * 78);

    people.push(person);
}
console.log(people);
const jsonPeople = JSON.stringify(people);
fs.writeFile('people.json', jsonPeople, (err) => {
    if (err){
        console.log('Something went wrong');
        throw err;
    } 
    console.log('The file has been successfully generated!');
  });
  
