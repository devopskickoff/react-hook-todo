import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    // setState todos와 같다
    const [todos, setTodos] = useState([]);

    //누를때마다 초기화된다
    const addTodo = todo => {
        if(!todo.text){
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(todos)
    }


    const updateTodo = (todoId, newValue)=> {
        if(!newValue.text){
            return;
        }
        setTodos(prev=> prev.map(item => (item.id === todoId? newValue : item)));
    };



    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    };


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todos.idComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            {/* form 서브밋 될때마다 addTodo실행 */}
            <TodoForm onSubmit={addTodo}/>
            <Todo 
               todos={todos} 
               completeTodo={completeTodo} 
               removeTodo={removeTodo}
               updateTodo={updateTodo}/>
        </div>
    );
}

export default TodoList
