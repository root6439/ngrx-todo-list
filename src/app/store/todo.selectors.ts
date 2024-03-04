import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './app-state';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectCompletedTodos = createSelector(selectTodoState, (state) => {
  return state.todos.filter((todo) => todo.completed);
});

export const selectImcompleteTodos = createSelector(
  selectTodoState,
  (state) => {
    return state.todos.filter((todo) => !todo.completed);
  }
);
