import React from "react";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";

export default class App extends React.Component{

  state = {
    todos: [
      {id: 1, title: "React", done: false},
      {id: 2, title: "Vue", done: true},
      {id: 3, title: "Angular", done: false}
    ],
    flag: false
  };

  removeTodo = (id)=>{
    let todos = this.state.todos;
    todos = todos.filter(el => el.id !== id);
    this.setState({todos});
  }

  addTodo = (title)=>{
    const todos = this.state.todos;
    const todo = {
      id: Date.now(),
      title: title,
      done: false
    };
    todos.push(todo);
    this.setState({todos});
  }

  doneTodo = (id) =>{
    const todos = this.state.todos;
    todos.map(el => {
      if(el.id === id) el.done = !el.done;
      return el;
    });
    this.setState({todos});
  }

  render(){
    return(
      <div className="App">
        <h1>ToDo List</h1>
        <AddToDo addTodo = {this.addTodo}/>
        <ToDoList 
           todos = {this.state.todos}
           removeTodo = {this.removeTodo}
           doneTodo = {this.doneTodo}
          />
      </div>
    );
  }


}