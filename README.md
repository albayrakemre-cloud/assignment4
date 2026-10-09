# Dynamic Task Dashboard

## File Organization
- 'index.html': Contains the basic structure of the dashboard.
- 'styles.css': Adds simple styles and shows which tasks are completed.
- 'api.js': Simulates a server request using setTimeout and Promise.
- 'taskManager.js': Includes the Task and TaskManager classes and manages tasks without changing the original data.
- 'main.js': Handles user actions, fetches data, converts data to JSON, and updates the page.

## Challenges Faced
- One of the challenges was keeping the data unchanged in the TaskManager. I used methods like map and filter instead of changing the original array directly.
- Creating elements with document.createElement instead of using innerHTML took some time, especially when adding event listeners. However, it helped me understand how DOM manipulation works.
- Making the id property read-only using Object.defineProperty was something new for me. It helped prevent the ID from being changed by mistake.