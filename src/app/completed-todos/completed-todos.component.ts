import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Todo } from '../store/app-state';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCompletedTodos } from '../store/todo.selectors';
import { CommonModule } from '@angular/common';
import { removeTodo, toggleTodo } from '../store/todo.actions';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-completed-todos',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './completed-todos.component.html',
  styleUrl: './completed-todos.component.scss',
})
export class CompletedTodosComponent {
  constructor(private store: Store) {
    this.dataSource$ = store.pipe(select(selectCompletedTodos));
  }

  dataSource$: Observable<Todo[]>;

  toggleTodo(todo: Todo) {
    this.store.dispatch(toggleTodo({ id: todo.id }));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
