import { useState } from 'react'
import { useEffect } from 'react'

export default function TodoList(){
 
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(
    () => localStorage.setItem("todos",JSON.stringify(todos))
    ,[todos]
  );

  function AddTodo() {
    setTodos([...todos, { id: Date.now(), text: "", checked: false, isEditing: true }]);
    console.log(todos);
  }

  function updateTodoText(id, newText) {
    setTodos(todos.map(
      (todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText }
        } else {
          return todo
        }
      }
    ));
  }
  
  function updateTodoEditing(id){
    setTodos(todos.map(
      (todo) => {
        if (todo.id === id) {
          return {...todo, isEditing: true}
        } else {
          return todo
        }
      }
    ));
  }
  
  function finishEditing(id) {
    setTodos(todos.map(
      (todo) => {
        if (todo.id === id) {
          return {...todo, isEditing: false}
        } else {
          return todo
        }
      }
    ));


  }

  function toggleChecked(id) {
    setTodos(todos.map(
      (todo) => {
        if (todo.id === id) {
          return {...todo, checked: !todo.checked}
        } else {
          return todo
        }
      }
    ))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(
      (todo) => {
        if (todo.id !== id) {
          return {...todo}
        } 
      }
    ))
  }

  return (
    <>
      <h2>Todo List</h2>
      <div className="todo-items">
        {
          todos.map((todo) => 
            <div className="todo-item" key={todo.id}>
              <input type="checkbox" checked={todo.checked} onChange={() => toggleChecked(todo.id)} />
              {todo.isEditing ? <input value={todo.text} onBlur={() => finishEditing(todo.id)} onKeyDown={ e => e.key === "Enter" && finishEditing(todo.id)} onChange={e => updateTodoText(todo.id, e.target.value)} /> : <span onClick={e => updateTodoEditing(todo.id)}>{todo.text}</span>}  
              <button onClick={e => deleteTodo(todo.id)} >Delete</button>
            </div>
          )
        }
      </div>
      <button onClick={AddTodo} >Add task</button>
    
    </>
  );
}
