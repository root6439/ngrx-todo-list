import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../store/todo.actions';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.scss',
})
export class TodoCreateComponent {
  constructor(private fb: FormBuilder, private store: Store) {}

  formTodo = this.fb.group({
    name: ['', Validators.required],
  });

  addTodo(): void {
    this.store.dispatch(addTodo({ text: this.formTodo.get('name').value }));
  }
}
