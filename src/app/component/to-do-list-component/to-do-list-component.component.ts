import { Component } from '@angular/core';
import { Todo } from './todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do-list-component.component.html',
  styleUrl: './to-do-list-component.component.css'
})
export class ToDoListComponentComponent {
  todos: Todo[] = [];
  todoTitle: string = '';
  todoDescription: string = '';
  isUpdateMode: boolean = false;
  updateTodoId: number | null = null;

  addOrUpdateTodo() {
    if (this.isUpdateMode && this.updateTodoId !== null) {
      const index = this.todos.findIndex(todo => todo.id === this.updateTodoId);
      if (index !== -1) {
        this.todos[index].title = this.todoTitle;
        this.todos[index].description = this.todoDescription;
        this.isUpdateMode = false;
        this.updateTodoId = null;
      }
    } else {
      // Add new todo
      this.todos.push(new Todo(
        this.todos.length + 1,
        this.todoTitle,
        this.todoDescription,
        false
      ));
    }
    // Clear input fields
    this.todoTitle = '';
    this.todoDescription = '';
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  setUpdateMode(todo: Todo) {
    // Set values of input fields to the selected todo item's title and description
    this.todoTitle = todo.title;
    this.todoDescription = todo.description;
    this.isUpdateMode = true;
    this.updateTodoId = todo.id;
  }

  deleteTodo(todoId: number) {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
