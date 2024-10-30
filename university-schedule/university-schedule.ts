// 1. Визначення базових типів

// a) Тип для днів тижня
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

// b) Union type для часових слотів
type TimeSlot = "8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15";

// c) Тип для типів занять
type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";

// 2. Створення основних структур

// a) Професор
type Professor = {
  id: number;
  name: string;
  department: string;
};

// b) Аудиторія
type Classroom = {
  number: string;
  capacity: number;
  hasProjector: boolean;
};

// c) Курс
type Course = {
  id: number;
  name: string;
  type: CourseType;
};

// d) Заняття
type Lesson = {
  courseId: number;
  professorId: number;
  classroomNumber: string;
  dayOfWeek: DayOfWeek;
  timeSlot: TimeSlot;
};

// 3. Масиви даних

const professors: Professor[] = [];
const classrooms: Classroom[] = [];
const courses: Course[] = [];
const schedule: Lesson[] = [];

// 4. Функції для роботи з масивами

// a) Додавання професора
function addProfessor(professor: Professor): void {
  professors.push(professor);
}

// b) Додавання заняття до розкладу
function addLesson(lesson: Lesson): boolean {
  if (validateLesson(lesson) === null) {
    schedule.push(lesson);
    return true;
  }
  return false;
}

// 5. Пошук та фільтрація

// a) Пошук вільних аудиторій
function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] {
  const occupiedClassrooms = schedule
    .filter((lesson) => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
    .map((lesson) => lesson.classroomNumber);

  return classrooms
    .filter((classroom) => !occupiedClassrooms.includes(classroom.number))
    .map((classroom) => classroom.number);
}

// b) Отримання розкладу професора
function getProfessorSchedule(professorId: number): Lesson[] {
  return schedule.filter((lesson) => lesson.professorId === professorId);
}

// 6. Обробка конфліктів та валідація

// a) Тип конфліктів у розкладі
type ScheduleConflict = {
  type: "ProfessorConflict" | "ClassroomConflict";
  lessonDetails: Lesson;
};

// b) Валідація заняття на конфлікти
function validateLesson(lesson: Lesson): ScheduleConflict | null {
  for (const scheduledLesson of schedule) {
    if (
      scheduledLesson.dayOfWeek === lesson.dayOfWeek &&
      scheduledLesson.timeSlot === lesson.timeSlot
    ) {
      if (scheduledLesson.professorId === lesson.professorId) {
        return { type: "ProfessorConflict", lessonDetails: scheduledLesson };
      }

      if (scheduledLesson.classroomNumber === lesson.classroomNumber) {
        return { type: "ClassroomConflict", lessonDetails: scheduledLesson };
      }
    }
  }
  return null;
}

// 7. Аналіз та звіти

// a) Визначення відсотку використання аудиторії
function getClassroomUtilization(classroomNumber: string): number {
  const totalSlots = 5 * 5; // 5 днів на тиждень, 5 слотів на день
  const usedSlots = schedule.filter(
    (lesson) => lesson.classroomNumber === classroomNumber
  ).length;
  return (usedSlots / totalSlots) * 100;
}

// b) Визначення найпопулярнішого типу занять
function getMostPopularCourseType(): CourseType {
  const courseTypeCount: Record<CourseType, number> = {
    Lecture: 0,
    Seminar: 0,
    Lab: 0,
    Practice: 0,
  };

  for (const lesson of schedule) {
    const course = courses.find((course) => course.id === lesson.courseId);
    if (course) {
      courseTypeCount[course.type]++;
    }
  }

  let maxCount = 0;
  let mostPopularType: CourseType = "Lecture";
  for (const type in courseTypeCount) {
    if (courseTypeCount[type as CourseType] > maxCount) {
      maxCount = courseTypeCount[type as CourseType];
      mostPopularType = type as CourseType;
    }
  }

  return mostPopularType;
}

// 8. Модифікація даних

// a) Зміна аудиторії для заняття
function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
  const lesson = schedule.find((lesson) => lesson.courseId === lessonId);
  if (lesson && !schedule.some(
      (l) =>
        l.classroomNumber === newClassroomNumber &&
        l.dayOfWeek === lesson.dayOfWeek &&
        l.timeSlot === lesson.timeSlot
    )) {
    lesson.classroomNumber = newClassroomNumber;
    return true;
  }
  return false;
}

// b) Скасування заняття
function cancelLesson(lessonId: number): void {
  const index = schedule.findIndex((lesson) => lesson.courseId === lessonId);
  if (index !== -1) {
    schedule.splice(index, 1);
  }
}

// 9. Тести (приклади використання)

function runTests() {
  // Додаємо професорів
  addProfessor({ id: 1, name: "Dr. Smith", department: "Computer Science" });
  addProfessor({ id: 2, name: "Dr. Johnson", department: "Mathematics" });

  // Додаємо курси
  courses.push({ id: 1, name: "Programming 101", type: "Lecture" });
  courses.push({ id: 2, name: "Algebra", type: "Seminar" });

  // Додаємо аудиторії
  classrooms.push({ number: "101", capacity: 30, hasProjector: true });
  classrooms.push({ number: "102", capacity: 25, hasProjector: false });

  // Додаємо заняття
  console.log(addLesson({ courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" })); // true
  console.log(addLesson({ courseId: 2, professorId: 2, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" })); // false (ClassroomConflict)

  // Пошук розкладу професора
  console.log(getProfessorSchedule(1)); // [{ courseId: 1, ... }]

  // Пошук вільних аудиторій
  console.log(findAvailableClassrooms("8:30-10:00", "Monday")); // ["102"]

  // Зміна аудиторії
  console.log(reassignClassroom(1, "102")); // true

  // Скасування заняття
  cancelLesson(1);
  console.log(schedule); // []
}

// Запуск тестів
runTests();
