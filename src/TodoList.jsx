import { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

function TodoList() {
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState(null);
    const [priority, setPriority] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
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

    const handleDateChange = (value) => {
        setDate(value);
        const formatted = value ? value.format('YYYY-MM-DD') : '';
        setFormattedDate(formatted);
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    const addTodo = () => {
        if (desc.trim() !== '' && date && priority.trim() !== '') {
            setTodos([...todos, { description: desc, date: formattedDate, priority: priority }]);
            setDesc('');
            setDate(null);
            setPriority('');
            setFormattedDate('');
        }
    };

    const handleDelete = () => {
        const selectedNode = gridRef.current.getSelectedNodes()[0];
        if (selectedNode) {
            const selectedIndex = selectedNode.rowIndex;
            const newTodos = [...todos];
            newTodos.splice(selectedIndex, 1);
            setTodos(newTodos);
        }
    };
    return (
        <>
            <TextField 
                label="Description" 
                onChange={handleDescChange} 
                value={desc} 
            />
            <TextField
                label="Priority" 
                onChange={handlePriorityChange} 
                value={priority} 
            /> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Date"
                    value={date}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}            
                />
            </LocalizationProvider>
            <Button onClick={addTodo}>Add</Button>
            <Button onClick={handleDelete}>Delete</Button>
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