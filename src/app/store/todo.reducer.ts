import { createReducer, on } from '@ngrx/store';
import { Todo, TodoState } from './app-state';
import { addTodo, removeTodo, toggleTodo } from './todo.actions';

const initialState: TodoState = {
  todos: [],
  error: null,
  loading: false,
};

export const todoRecucer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => ({
    ...state,
    todos: [...state.todos, { completed: false, id: state.todos.length, text }],
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(toggleTodo, (state, { id }) => {
    const todoIndex = state.todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return state;
    }

    const updatedTodos = state.todos.map((todo, index) => {
      if (index === todoIndex) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    return {
      ...state,
      todos: updatedTodos,
    };
  })
);
