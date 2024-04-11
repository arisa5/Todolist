import React from 'react'
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo, setTodos, setEditTodo, editTodo}) => {
  return todos.map((todo) =>
    <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} setTodos={setTodos} todos={todos} setEditTodo={setEditTodo} editTodo={editTodo}/>
  );
  
};

export default TodoList