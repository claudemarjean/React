import React, {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import uuid from 'uuid';


const Todo = ()=>{

    const[todos, setTodos] = useState([
        {id: 1, todo: 'acheter du lait' },
        {id: 2, todo:'acheter du pain'},
        {id: 3, todo:'acheter du bière'}
    ])

    const myTodos = todos.map(todo =>{
        return(
            <li className='list-group-item' key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) =>{
        setTodos([...todos,{
            id:uuid(),
            todo: newTodo
        }])
    }

    return (
        <div>
            <h1 className='text-center'>{todos.length}To-do</h1>
            <ul className='list-group'>
                {myTodos}
            </ul>
            <AddTodoForm />
        </div>
    )
}

export  default Todo