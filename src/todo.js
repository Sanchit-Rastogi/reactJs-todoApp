import React, { Component } from 'react';
import "./todo.css"

class Todo extends Component {

    state = {
        isEditing : false,
        etask : this.props.task
    }

    removeTodo = () => {
        this.props.remove(this.props.id);
    }

    toggle = () => {
        this.setState({
            isEditing : !this.state.isEditing
        })
    }

    handleEdit = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleEditSubmit = (evt) => {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.etask);
        this.setState({
            isEditing : false
        })
    }

    handleStrike = (evt) => {
        this.props.strike(this.props.id);
    }

    render(){

        let result;

        if(!this.state.isEditing){
             result = <div>
                <button onClick={this.toggle}>Edit</button>
                <button onClick={this.removeTodo} >Delete</button>
                <li 
                   className={this.props.completed ? "completed" : ""}
                   onClick={this.handleStrike}
                    >
                  {this.props.task}
                </li>
            </div>
        }else {
             result = <form onSubmit={this.handleEditSubmit}>
                 <input
                   type="text"
                   name="etask"
                   value={this.state.etask}
                   onChange={this.handleEdit}
                 />
                 <button>Save</button>
             </form>
        }
        return result;
    }
}

export default Todo;