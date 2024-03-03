import { useState } from "react";

import TodoTable from "./TodoTable";
function TodoList() {

    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);


    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const addTodo = () => {
        if (desc.trim() !== "" && date.trim() !== "") {
            setTodos([...todos, { description: desc, date: date }]);
            setDesc("");
            setDate("");
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <>
            <input 
                placeholder="Description" 
                onChange={handleDescChange} 
                value={desc} 
            />
            <input 
                type="text"
                placeholder="Date (YYYY-MM-DD)" 
                onChange={handleDateChange} 
                value={date} 
            />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} onDelete={deleteTodo}/>
        </>
    );
}

export default TodoList;
