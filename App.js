import TodoList from "./TodoList";
import {useState, useRef, useEffect} from "react";
import {v4 as uuidv4} from "uuid";

//
function App() {
  const [todos, setTodos] = useState([]);

    const todoNameRef = useRef();

    const [editTodo, setEditTodo] = useState("");

const handleEdit =(e)=>{
console.log(e.target.value)
setEditTodo((prevState)=>({...prevState, name: e.target.value}))
console.log(editTodo)
}

const handleKeep =()=>{
  const newTodos = todos.map((todo)=> {
    if(todo.id === editTodo.id){
      return editTodo
    } else{
      return todo
    }
  })
  console.log(newTodos)

  setTodos(newTodos)
// setTodos((prevState)=>{
//   prevState.map((todo)=> {
//     if(todo.id === editTodo.id){
//       return editTodo
//     } else{
//       return todo
//     }
//   })
// })
setEditTodo("")
}

useEffect(()=>{
  console.log(todos)
},[todos])

const handleAddTodo = () => {
  //タスクを追加する
const name =todoNameRef.current.value;
if (name === "") return;
setTodos((prevTodos) => {
  return [...prevTodos, {id: uuidv4(), name: name, completed: false }];
});
todoNameRef.current.value =null;
};

const toggleTodo = (id) =>{
const newTodos = [...todos];
const todo = newTodos.find((todo) => todo.id === id);
todo.completed = !todo.completed;
setTodos(newTodos);
};

const handleClear =()=>{
  const newTodos = todos.filter((todo)=> !todo.completed);
  setTodos(newTodos)
}



  return (<div>
    <TodoList todos={todos} toggleTodo={toggleTodo} setTodos={setTodos} setEditTodo={setEditTodo} editTodo={editTodo}/>
    <input tyep="text" ref={todoNameRef} />
    
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button onClick={handleClear}>完了したタスクの削除</button>
    <div>
    <input type="text" label="新しいタイトル" onChange={handleEdit} value={editTodo?.name}/>
    <button>キャンセル</button>
    <button onClick={handleKeep}>保存</button>
    </div>
    {/* <div>残りのタスク:{todos.filter((todo)=> !todo.completed).length}</div> */}

  </div>);
}

export default App;
