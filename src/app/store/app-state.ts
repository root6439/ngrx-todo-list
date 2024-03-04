export interface AppState {
  todos: TodoState;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: any;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
