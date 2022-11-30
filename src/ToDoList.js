import ToDoItem from "./ToDoItem";


const ToDoList = (props) =>{

    const elements = props.todos.map((el, index) => {
        return (
            <ToDoItem 
                key = {index}
                todo = {el}
                removeTodo = {props.removeTodo}
                doneTodo = {props.doneTodo}
            />
        );
    });

    return (
      <div className = "ToDoList"> {elements} </div>
    ); 
}

export default ToDoList;