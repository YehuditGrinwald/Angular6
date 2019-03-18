import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable()


export class TodoDataService {
    lastId = 0;
    todos: Todo[] = [];
    constractor() { }
    

    // created item
    // POST /todos
    addTodo(todo: Todo): TodoDataService {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    }
    //delete item
    //DELETE /todos/:id
    deleteTodoById(id: number): TodoDataService {
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this;
    }

    updateTodoById(id: number, values: Object = {}): Todo | any {
        const todo = this.getTodoById(id);
        if (!todo) {
            return todo;
        }
        Object.assign(todo, values);
        return todo;
    }
    getAllTodos(): Todo[] {
        return this.todos;
    }

    getTodoById(id: number): Todo | any {
        return this.todos.filter(todo => todo.id === id).pop();
    }

    toggleTodoComplete(todo: Todo) {
        const updatedTodo = this.updateTodoById(todo.id, { complete: !todo.completed });
        return updatedTodo;
    }
    getTodoByCategory(id: number): Todo[] {
        return this.todos.filter(todo => todo.category === id);
    }
    
}