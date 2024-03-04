import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../store/app-state';
import { selectImcompleteTodos } from '../store/todo.selectors';
import { removeTodo, toggleTodo } from '../store/todo.actions';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-incomplete-todos',
  standalone: true,
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './incomplete-todos.component.html',
  styleUrl: './incomplete-todos.component.scss',
})
export class IncompleteTodosComponent {
  constructor(private store: Store) {
    this.dataSource$ = store.pipe(select(selectImcompleteTodos));
  }

  dataSource$: Observable<Todo[]>;

  toggleTodo(todo: Todo) {
    this.store.dispatch(toggleTodo({ id: todo.id }));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
