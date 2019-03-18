export class Todo {
    id: number;
    title = '';
    completed = false;
    category: number;
    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}