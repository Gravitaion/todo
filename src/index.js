import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( tarea );
// console.log( todoList );
// crearTodoHtml( tarea );

todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo('Aprender JavaScript');

console.log('todos', todoList.todos);