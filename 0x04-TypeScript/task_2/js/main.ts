
// Create the DirectorInterface interface with the 3 expected methods:

interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks():string
}

// Create the TeacherInterface interface with the 3 expected methods

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }

    getToWork(): string {
        return "Getting a coffee break"
    }

    getCoffeeBreak(): string {
        return ''
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }

}



// Create a class Teacher that will implement TeacherInterface

class Teacher implements TeacherInterface {
    constructor() {
    }
    workFromHome(): string {
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }

}

function createEmployee(salary: string | number): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else return new Director(); 
}




function isDirector(employee: TeacherInterface | DirectorInterface) : boolean {
    if (employee instanceof Director ) return true;
    return false;
}


function executeWork(employee: Teacher | Director) : void {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }

}



// Write a String literal type named Subjects
// allowing a variable to have the value Math or History only.
// Write a function named teachClass:

type Subject = 'Math' | 'History'
function teachClass(todayClass: Subject) : string {
    switch(todayClass) {
        case "History":
                    return 'Teaching History';
        case 'Math':
                    return 'Teaching Math'; 
             default: return 'Invalid subject';
    }
}
