// import {Teacher} from './Teacher';
// import {Subject} from './Subject';

namespace Subjects {

    export interface Teacher {
        experienceTeachingC? : number
    }

    export class Cpp extends Subjects.Subject {
      
       
        getRequirements() : string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher() :string {
            return this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
    }
}
