import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppState, Todo, TodoState } from './store/app-state';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './store/todo.actions';
import { CommonModule } from '@angular/common';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { IncompleteTodosComponent } from './incomplete-todos/incomplete-todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TodoCreateComponent,
    CompletedTodosComponent,
    IncompleteTodosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {
    this.store
      .select((state) => state.todos)
      .subscribe((todos) => {
        this.todos = todos.todos;
      });
  }

  addNewTodo() {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      text: 'New Todo',
      completed: false,
    };
    // this.store.dispatch(addTodo({ todo: newTodo }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }
}
