import { useState } from "react";

const AddToDo = (props)=>{

    const [value, setValue] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        if(value.trim()) props.addTodo(value);
        setValue('');

    }

    return(
        <form onSubmit={submitHandler}> 
            <input type="text" value={value} onChange ={(e)=>setValue(e.target.value)}/>
            <button type="submit">Add ToDo</button>
        </form>
    );
}

export default AddToDo