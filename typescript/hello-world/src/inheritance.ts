class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log("person walking");
  }
}

class Student extends Person {
  studentId: string;

  constructor(studentId: string, firstName: string, lastName: string) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  takeTest() {
    this.walk();  // sub class can invoke protected method of super class
    console.log("Taking a test");
  }
}

let student = new Student("A01", "John", "Handick");
console.log(student.fullName);
// student.walk();
student.takeTest();

// override
class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

// Polymorphism
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student("A02", "John", "Smith"),
  new Teacher("Mosh", "Hamedani"),
]);

// Classes should be open for extersion and closed for modification
