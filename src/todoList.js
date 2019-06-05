import React, { Component } from 'react';
import Todo from "./todo";
import NewTodoForm from "./newTabForm";

class TodoList extends Component {

    state = {
        todos : []
    }

    create = (newTodo) => {
        this.setState({
            todos : [...this.state.todos, newTodo]
        })
    }

    remove = (id) => {
        this.setState({
            todos : this.state.todos.filter(t => t.id !== id)
        })
    }

    update = (id, updatedTask) => {
        const updated = this.state.todos.map( t => {
            if(t.id === id){
                return{...t, task : updatedTask}
            }
            return t;
        })
        this.setState({
            todos : updated
        })
    }

    strike = (id) => {
        const updated = this.state.todos.map( t => {
            if(t.id === id){
                return{...t, completed : !t.completed}
            }
            return t;
        })
        this.setState({
            todos : updated
        })
    }

    render(){

        const myTodo = this.state.todos.map( todo => {
            return <Todo
               task={todo.task}
               key={todo.id}
               id={todo.id}
               completed={todo.completed}
               remove={this.remove}
               update={this.update}
               strike={this.strike}
            />
        })

        return (
            <div>
               <h1>Todo List</h1>
               <ul>
                  {myTodo}
               </ul>
               <NewTodoForm newTodo={this.create}/>
            </div>
        )
    }
}

export default TodoList;