// taskManager.js
class Task {
    constructor(id, title, completed) {
        // ID not change (immutable)
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            enumerable: true
        });
        this.title = title;
        this.completed = completed;
    }

    toggle() {
        return new Task(this.id, this.title, !this.completed);
    }
}