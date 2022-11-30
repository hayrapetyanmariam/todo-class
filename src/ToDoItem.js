
const ToDoItem = (props)=>{


    return(
        <div className = {props.todo.done ? "Todo done" : "Todo"}>
            {props.todo.id + '' + props.todo.title}
            <i className="fa-solid fa-check" onClick={()=>props.doneTodo(props.todo.id)}></i>
            <i className="fa-solid fa-trash" onClick={()=>props.removeTodo(props.todo.id)}></i>
        </div>
        
    );
}

export default ToDoItem;