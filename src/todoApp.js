/*  import React ,from 'react';
import "./test.css";

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.userInputHandler = this.userInputHandler.bind(this);
        this.state={
        userinput: "write here"
        };
    }

    render(){
    const userInputHandler= (e)=>{
    setInputText(e.target.value);
    }

    return(
    <form className="myForm" >
    <input onChange={userInputHandler} type="text" className="todo-input"></input>
    <button className="todo-btn" type="submit">Submit</button>
    <div className="select">
    <select className="todo-filter" name="todos">
    <option value="all"></option>
    <option value="completed">completed</option>
    <option value="uncompleted">uncompleted</option>
    </select>
    </div>
    </form>


        )
    }
}


function MyTasks (){
    return(
        <div className="todo-container">
        <ul className="tasks"></ul>
        </div>
    )
}



export {TodoApp, MyTasks}; */