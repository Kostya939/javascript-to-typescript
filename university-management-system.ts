// Enum
enum StudentStatus {
    Active = "Active",
    Academic_Leave = "Academic_Leave",
    Graduated = "Graduated",
    Expelled = "Expelled",
}

enum CourseType {
    Mandatory = "Mandatory",
    Optional = "Optional",
    Special = "Special",
}

enum Semester {
    First = "First",
    Second = "Second",
}

enum GradeEnum {
    Excellent = 5,
    Good = 4,
    Satisfactory = 3,
    Unsatisfactory = 2,
}

enum Faculty {
    Computer_Science = "Computer_Science",
    Economics = "Economics",
    Law = "Law",
    Engineering = "Engineering",
}

// Interfaces
interface Student {
    id: number;
    fullName: string;
    faculty: Faculty;
    year: number;
    status: StudentStatus;
    enrollmentDate: Date;
    groupNumber: string;
}

interface Course {
    id: number;
    name: string;
    type: CourseType;
    credits: number;
    semester: Semester;
    faculty: Faculty;
    maxStudents: number;
}

interface Grade {
    studentId: number;
    courseId: number;
    grade: GradeEnum;
    date: Date;
    semester: Semester;
}

// UniversityManagementSystem class
class UniversityManagementSystem {
    private students: Student[] = [];
    private courses: Course[] = [];
    private grades: Grade[] = [];
    private studentIdCounter = 1;
    private courseRegistrations: Map<number, Set<number>> = new Map();

    // Enroll a new student
    enrollStudent(student: Omit<Student, "id">): Student {
        const newStudent: Student = { id: this.studentIdCounter++, ...student };
        this.students.push(newStudent);
        this.courseRegistrations.set(newStudent.id, new Set());
        return newStudent;
    }

    // Register a student for a course
    registerForCourse(studentId: number, courseId: number): void {
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);
        if (!student || !course) throw new Error("Student or course not found.");
        if (student.faculty !== course.faculty) throw new Error("Student and course faculty mismatch.");
        if ((this.courseRegistrations.get(courseId)?.size || 0) >= course.maxStudents) {
            throw new Error("Course is full.");
        }
        this.courseRegistrations.get(studentId)!.add(courseId);
    }

    // Set a grade for a student in a course
    setGrade(studentId: number, courseId: number, grade: GradeEnum): void {
        const registeredCourses = this.courseRegistrations.get(studentId);
        if (!registeredCourses?.has(courseId)) {
            throw new Error("Student is not registered for this course.");
        }
        this.grades.push({ studentId, courseId, grade, date: new Date(), semester: Semester.First });
    }

    // Update the status of a student
    updateStudentStatus(studentId: number, newStatus: StudentStatus): void {
        const student = this.students.find(s => s.id === studentId);
        if (!student) throw new Error("Student not found.");
        if (student.status === StudentStatus.Graduated && newStatus !== StudentStatus.Graduated) {
            throw new Error("Cannot change status of a graduated student.");
        }
        student.status = newStatus;
    }

    // Get all students by faculty
    getStudentsByFaculty(faculty: Faculty): Student[] {
        return this.students.filter(s => s.faculty === faculty);
    }

    // Get grades of a student
    getStudentGrades(studentId: number): Grade[] {
        return this.grades.filter(g => g.studentId === studentId);
    }

    // Get available courses by faculty and semester
    getAvailableCourses(faculty: Faculty, semester: Semester): Course[] {
        return this.courses.filter(c => c.faculty === faculty && c.semester === semester);
    }

    // Calculate average grade of a student
    calculateAverageGrade(studentId: number): number {
        const studentGrades = this.getStudentGrades(studentId);
        if (studentGrades.length === 0) return 0;
        const total = studentGrades.reduce((sum, g) => sum + g.grade, 0);
        return total / studentGrades.length;
    }

    // Get list of excellent students by faculty
    getExcellentStudents(faculty: Faculty): Student[] {
        const excellentStudentIds = new Set(
            this.grades.filter(g => g.grade === GradeEnum.Excellent).map(g => g.studentId)
        );
        return this.students.filter(s => s.faculty === faculty && excellentStudentIds.has(s.id));
    }
}
