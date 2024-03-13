/*Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.
*/

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName() {
        return `The name of the person is ${this.firstName} ${this.lastName}`;
    }

    static averageAge(personArray) {
        if (personArray.length === 0) {
            return 0;
        }

        const totalAge = personArray.reduce((acc, person) => acc + person.age, 0);
        return totalAge / personArray.length;
    }
}


const person1 = new Person('Udit', 'Pratap', 25);
const person2 = new Person('Aayush', 'Pande', 30);
const person3 = new Person('Bobby', 'Singh', 22);

const peopleArray = [person1, person2, person3];

console.log(person1.fullName());
console.log(Person.averageAge(peopleArray).toFixed(2)); 

/*output= The name of the person is Udit Pratap
25.67*/
