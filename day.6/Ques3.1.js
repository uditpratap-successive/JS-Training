//3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
class Person {
    constructor(name, age, gender, interest) {
        this.person_name = name;
        this.person_age = age;
        this.person_gender = gender;
        this.person_interest = interest;
    }

    greeting() {
        console.log(`Hi all I want to introduce new soldier Mr ${this.person_name}, he is ${this.person_age},he is falling under ${this.person_gender} category and he is having interest in ${this.person_interest}.We all welcome you to the Batalian`);

    }
    Farewell() {
        console.log(`Hi all We are here to give farewell to our soldier Mr ${this.person_name}, he is ${this.person_age}, he is falling under ${this.person_gender} and he is having interest in ${this.person_interest}.We all will miss you in the team`);

    }
}
let person1 = new Person('varun', '28', 'Male', 'Cricket');
person1.greeting();
person1.Farewell();

/*output=Hi all I want to introduce new soldier Mr varun, he is 28,he is falling under Male category and he is having interest in Cricket.We all welcome you to the Batalian
Hi all We are here to give farewell to our soldier Mr varun, he is 28, he is falling under Male and he is having interest in Cricket.We all will miss you in the team
*/