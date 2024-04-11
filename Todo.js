import React from 'react'


const Todo = ({todo, toggleTodo, setTodos, todos, setEditTodo, editTodo}) => {

    const handleDelete =(todo)=>{
        console.log(todo.id)
        setTodos(todos.filter((Deletetodo)=>Deletetodo.id !==todo.id))
        console.log(todos.filter((Deletetodo)=>Deletetodo.id !==todo.id))
        
    };

    const handleEdit =(todo)=>{
        setEditTodo(todo)
        //setTodos(todos.filet((Edittodo)= Edittodo.id ))
    }
    
    
const handleTodoClick =() =>{
    toggleTodo(todo.id);
};

  return( 
    
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick}/>
        </label>
        {todo.name}
        <button onClick={()=>handleDelete(todo)}>削除</button>
        <button onClick={()=>handleEdit(todo)}>編集</button>

    </div>

  );
}

export default Todo;