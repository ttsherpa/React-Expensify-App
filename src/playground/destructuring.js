//Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Los Angeles',
//         temp: 80
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;
// //const name = person.name;
// //const age = person.age;

// console.log(`${firstname} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//Array Destructuring 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state='New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Iced Coffee(hot)', '$2.00', '2.50', '$2.75' ];

const [drink, , medprice, ] = item;

console.log(`A medium ${drink} costs ${medprice}`);