import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleSumit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumit}>
                    <label>Add one todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;
