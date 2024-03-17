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

  todos: Todo[] = [
    { title: 'Task 1', description: 'Description for Task 1', completed: false },
    { title: 'Task 2', description: 'Description for Task 2', completed: true }
  ];
  addTodo(title: string, description: string) {
    this.todos.push(new Todo(title, description, false));
  }
  constructor() { }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
