import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    todoItem: string = '';

  todoList: string[] = [];

  addToTodoList =() => {
    this.todoList.push(this.todoItem)

    this.todoItem = ''
  }
}