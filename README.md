# TypeScript Interactive Website Project

This project is built using TypeScript to enhance code quality through strong typing and better code maintainability. The project incorporates various interactive features like modal windows, event listeners, animations, and data fetching from an API.

## Link

GitHub Pages: [https://kostya939.github.io/Kozachok-ts/](https://kostya939.github.io/Kozachok-ts/)

## Description of Interactivity

### Modal Windows
- **Open Modal Window**: A modal window opens when clicking the designated button.
- **Close Modal Window**: The modal window closes when clicking outside it or on the close icon.

### Event Listeners
- **Scroll Event**: When the page is scrolled more than 40px from the top, a `sticky-top` class is added to the navigation bar, fixing it at the top.
- **Click Event**: Various buttons and elements on the page trigger actions like opening modals or toggling classes.

### Animations
- **CSS Animations**: Elements with the `animate` class receive a smooth fade-in effect when the page loads or when the user interacts with specific elements.
- **Scroll Animations**: Animations trigger as you scroll down the page, giving a smooth and dynamic user experience.

### Fetch Data
- **Data from API**: Fetches posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) and displays them in the "Posts" section.
- **Error Handling**: If the API request fails, an error message is logged in the browser console.

### Back to Top Button
- **Show/Hide Button**: A "Back to Top" button appears when scrolling beyond 100px, and hides when scrolling back up.
- **Smooth Scroll**: Clicking the "Back to Top" button smoothly scrolls the page back to the top.

### Technologies and Libraries
- **TypeScript**: Used for writing typed JavaScript to improve code quality and maintainability.
- **HTML/CSS**: Basic layout and design.
- **Bootstrap**: Used for responsive design and UI components.
- **Fetch API**: For retrieving data from a remote API.
