import React, { Component } from 'react';
import uuid from "uuid/v4";

class NewTodoForm extends Component {

    state = {
        task : ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.newTodo({...this.state, id : uuid(), completed : false});
        this.setState({
            task : ""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task"></label>
                <input
                   type="text"
                   name="task"
                   id="task"
                   placeholder="New Todo"
                   onChange={this.handleChange}
                   value={this.state.task}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;