# University Schedule Management System

This project is an implementation of a **University Schedule Management System** using **JavaScript** and **TypeScript**. It includes tools like **ESLint**, **Prettier**, **Husky**, and **lint-staged** to maintain clean and consistent code. The system allows users to manage and organize university schedules by adding, modifying, and canceling lessons, as well as analyzing classroom utilization and detecting schedule conflicts.

## Key Features

- **Add, update, and cancel lessons** for different professors and courses.
- **Search for available classrooms** based on the day of the week and time slots.
- **Check for scheduling conflicts** to ensure no overlapping lessons.
- **Analyze classroom utilization rates** to optimize room usage.
- **Generate reports** on the most popular course types.

## Technologies Used

- **TypeScript**: Used for strong typing and error checking.
- **JavaScript**: Used for dynamic functionality and DOM manipulation.
- **ESLint**: Helps in identifying and fixing problems in JavaScript/TypeScript code.
- **Prettier**: Ensures consistent code formatting across the project.
- **Husky**: Manages Git hooks to run automated checks before commits.
- **lint-staged**: Runs linters on staged files, ensuring that only properly formatted code is committed.

## Project Structure

- **script.js**: Contains the core logic in JavaScript.
- **script.ts**: TypeScript version of the code with types and additional validation.
- **tsconfig.json**: TypeScript configuration file.
- **.eslintrc.json**: ESLint configuration file for maintaining code quality.
- **.prettierrc**: Configuration file for consistent code formatting with Prettier.
