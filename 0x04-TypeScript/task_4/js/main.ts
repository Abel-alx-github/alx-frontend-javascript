// import * as Subjects from './subjects/Subject'; // import all the classes from the subjects file

export const cpp: Subjects.Cpp = new Subjects.Cpp(); // create a new object cpp from the Cpp class
export const java: Subjects.Java = new Subjects.Java(); // create a new object jave from the Java class
export const react: Subjects.React = new Subjects.React(); // create a new object react from the React class

//for cpp object(such as teacher, requirements, available teacher)
const cTeacher: Subjects.Teacher = {
    firstName: "Abel",
    lastName: "Tibeso",
    experienceTeachingC: 10
};
console.log('C++');
cpp.setTeacher = cTeacher; // set the teacher for cpp object
console.log(cpp.getRequirements()); // get the requirements for cpp object
console.log(cpp.getAvailableTeacher()); // get the available teacher for cpp object



//for java object(such as teacher, requirements, available teacher)
console.log('Java');
java.setTeacher = cTeacher; // set the teacher for java object
console.log(java.getRequirements()); // get the requirements for java object
console.log(java.getAvailableTeacher()); // get the available teacher for java object



//for react object(such as teacher, requirements, available teacher)
console.log('React'); 
react.setTeacher = cTeacher; // set the teacher for react object
console.log(react.getRequirements()); // get the requirements for react object
console.log(react.getAvailableTeacher()); // get the available teacher for react object 