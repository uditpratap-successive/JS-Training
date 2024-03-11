//Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.
class Person{
    constructor(name,designation){
        this.person_name=name;
        this.person_designation=designation;
    }
    farewell(){
        return(`We are here to give farewell to our respected teacher Mrs ${this.person_name}, she is ${this.person_designation} of our department`);
    }
}
class Teacher extends Person{
    constructor(name, designation,subject){
        super(name,designation);
        this.subject_teaches=subject;
    }
    farewell(){
        console.log(`We are here to give farewell to our respected teacher Mrs ${this.person_name}, She is ${this.person_designation} of our department,she teaches us ${this.subject_teaches}.`);
    }
}
let teacher=new Teacher('Shalini','HOD','COA');
teacher.farewell();

//output=We are here to give farewell to our respected teacher Mrs Shalini, she is HOD of our department,she teaches us COA