//Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

    class Person {
    constructor(name, classs) {
        this.student_name = name;
        this.student_class = classs;
    }

    greeting() {
        console.log(`Hello, my name is ${this.student_name} and I am in class ${this.student_class}.`);
    }
}

class Student extends Person {
    constructor(name, classs, studies) {
        super(name, classs);
        this.studies = studies;
    }

    greeting() {
        console.log(`Hello, my name is ${this.student_name}, I am in class ${this.student_class}, and I am studying ${this.studies}.`);
    }
}

const student1 = new Student("Vikas", "Btech", "Computer Science");
student1.greeting();
