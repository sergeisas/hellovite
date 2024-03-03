import { useRef,useState } from "react";
import { AgGridReact} from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

function TodoList() {
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const [columnDefs] = useState([
        { field: 'description', sortable: false, filter: true, floatingFilter: true, headerName: 'Description' },
        { field: 'priority', filter: true, floatingFilter: true },
        { field: 'date', filter: true, floatingFilter: true }
    ]);


    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    const addTodo = () => {
        if (desc.trim() !== '' && date.trim() !== '' && priority.trim() !== '') {
            setTodos([...todos, { description: desc, date: date, priority: priority }]);
            setDesc('');
            setDate('');
            setPriority('');
        }
    };



    const handleDelete = () => {
        setTodos(todos.filter((todos, index) => 
            index != gridRef.current.getSelectedNodes()[0].id))
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
            <input
                type="text"
                placeholder="Priority"
                onChange={handlePriorityChange}
                value={priority}
            />
            <button onClick={addTodo}>Add</button>
            <button onClick={handleDelete}>Delete</button>
            <div className="ag-theme-material" style={{width: 700, height: 500}}>
      <AgGridReact 
        ref={gridRef}
        onGridReady={ params => gridRef.current = params.api }
        rowData={todos}
        columnDefs={columnDefs}
        rowSelection="single" 
      />
    </div>
        </>
    );
}

export default TodoList;
