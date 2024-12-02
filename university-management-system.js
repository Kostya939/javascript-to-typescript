var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Enum
var StudentStatus;
(function (StudentStatus) {
    StudentStatus["Active"] = "Active";
    StudentStatus["Academic_Leave"] = "Academic_Leave";
    StudentStatus["Graduated"] = "Graduated";
    StudentStatus["Expelled"] = "Expelled";
})(StudentStatus || (StudentStatus = {}));
var CourseType;
(function (CourseType) {
    CourseType["Mandatory"] = "Mandatory";
    CourseType["Optional"] = "Optional";
    CourseType["Special"] = "Special";
})(CourseType || (CourseType = {}));
var Semester;
(function (Semester) {
    Semester["First"] = "First";
    Semester["Second"] = "Second";
})(Semester || (Semester = {}));
var GradeEnum;
(function (GradeEnum) {
    GradeEnum[GradeEnum["Excellent"] = 5] = "Excellent";
    GradeEnum[GradeEnum["Good"] = 4] = "Good";
    GradeEnum[GradeEnum["Satisfactory"] = 3] = "Satisfactory";
    GradeEnum[GradeEnum["Unsatisfactory"] = 2] = "Unsatisfactory";
})(GradeEnum || (GradeEnum = {}));
var Faculty;
(function (Faculty) {
    Faculty["Computer_Science"] = "Computer_Science";
    Faculty["Economics"] = "Economics";
    Faculty["Law"] = "Law";
    Faculty["Engineering"] = "Engineering";
})(Faculty || (Faculty = {}));
// UniversityManagementSystem class
var UniversityManagementSystem = /** @class */ (function () {
    function UniversityManagementSystem() {
        this.students = [];
        this.courses = [];
        this.grades = [];
        this.studentIdCounter = 1;
        this.courseRegistrations = new Map();
    }
    // Enroll a new student
    UniversityManagementSystem.prototype.enrollStudent = function (student) {
        var newStudent = __assign({ id: this.studentIdCounter++ }, student);
        this.students.push(newStudent);
        this.courseRegistrations.set(newStudent.id, new Set());
        return newStudent;
    };
    // Register a student for a course
    UniversityManagementSystem.prototype.registerForCourse = function (studentId, courseId) {
        var _a;
        var student = this.students.find(function (s) { return s.id === studentId; });
        var course = this.courses.find(function (c) { return c.id === courseId; });
        if (!student || !course)
            throw new Error("Student or course not found.");
        if (student.faculty !== course.faculty)
            throw new Error("Student and course faculty mismatch.");
        if ((((_a = this.courseRegistrations.get(courseId)) === null || _a === void 0 ? void 0 : _a.size) || 0) >= course.maxStudents) {
            throw new Error("Course is full.");
        }
        this.courseRegistrations.get(studentId).add(courseId);
    };
    // Set a grade for a student in a course
    UniversityManagementSystem.prototype.setGrade = function (studentId, courseId, grade) {
        var registeredCourses = this.courseRegistrations.get(studentId);
        if (!(registeredCourses === null || registeredCourses === void 0 ? void 0 : registeredCourses.has(courseId))) {
            throw new Error("Student is not registered for this course.");
        }
        this.grades.push({ studentId: studentId, courseId: courseId, grade: grade, date: new Date(), semester: Semester.First });
    };
    // Update the status of a student
    UniversityManagementSystem.prototype.updateStudentStatus = function (studentId, newStatus) {
        var student = this.students.find(function (s) { return s.id === studentId; });
        if (!student)
            throw new Error("Student not found.");
        if (student.status === StudentStatus.Graduated && newStatus !== StudentStatus.Graduated) {
            throw new Error("Cannot change status of a graduated student.");
        }
        student.status = newStatus;
    };
    // Get all students by faculty
    UniversityManagementSystem.prototype.getStudentsByFaculty = function (faculty) {
        return this.students.filter(function (s) { return s.faculty === faculty; });
    };
    // Get grades of a student
    UniversityManagementSystem.prototype.getStudentGrades = function (studentId) {
        return this.grades.filter(function (g) { return g.studentId === studentId; });
    };
    // Get available courses by faculty and semester
    UniversityManagementSystem.prototype.getAvailableCourses = function (faculty, semester) {
        return this.courses.filter(function (c) { return c.faculty === faculty && c.semester === semester; });
    };
    // Calculate average grade of a student
    UniversityManagementSystem.prototype.calculateAverageGrade = function (studentId) {
        var studentGrades = this.getStudentGrades(studentId);
        if (studentGrades.length === 0)
            return 0;
        var total = studentGrades.reduce(function (sum, g) { return sum + g.grade; }, 0);
        return total / studentGrades.length;
    };
    // Get list of excellent students by faculty
    UniversityManagementSystem.prototype.getExcellentStudents = function (faculty) {
        var excellentStudentIds = new Set(this.grades.filter(function (g) { return g.grade === GradeEnum.Excellent; }).map(function (g) { return g.studentId; }));
        return this.students.filter(function (s) { return s.faculty === faculty && excellentStudentIds.has(s.id); });
    };
    return UniversityManagementSystem;
}());
