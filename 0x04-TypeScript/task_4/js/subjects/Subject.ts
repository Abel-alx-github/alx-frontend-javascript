// contain a Subject class defination

namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher;
        
        set setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
            // this.teacher.lastName = teacher.lastName;
            }
        }
    }

