// Create a directory task_1 and copy these configuration 
// files into this folder: package.json, tsconfig.json, webpack.config.js

// firstName(string) and lastName(string). These two attributes should only
// be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) 
// without specifying the name of the attribute

// Create a class Teacher that implements the TeacherInterface

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [anyKey: string]: any;
}

// Extending the Teacher class

interface Directors extends Teacher {
    numberOfReports: number; 
}

// Write a function printTeacher:

// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe


interface printTeacherFunction {
    (firstName: string, lastName: string,) : void;
}

const printTeacher : printTeacherFunction = (firstName: string, lastName: string) : void => {
    console.log(`${firstName[0]}. ${lastName}`)
}


// Write a Class named StudentClass:Write a Class named StudentClass:


// interface for the class

interface StudentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string, 

}


class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName =  firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string{
        return('Currently working');
    }

    displayName(): string {
        return this.firstName;
    }
}