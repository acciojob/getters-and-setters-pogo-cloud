//complete this code
class Person {
	constructor(this._name,this._age){
		this._name=name;
		this._age=age;
	}
	getName(){
		return this._name;
	}
	setAge(value){
		this._age=value;
	}

    getAge(){
		return this._age;
	}
	// study(){
	// 	return `${this._name} is studying`;
	// }
	
}

class Student extends Person {
	study(){
		return `${this._name} is studying`;
	}
}

class Teacher extends Person {
	teach(){
		return `${this._name} is teaching`;
	}
}

// Do not change the code below this line
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
