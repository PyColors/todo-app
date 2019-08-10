import React, { Component } from 'react';
import Todos from './Todo/Todos';
import AddTodo from './AddTodo/AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'content1'},
      {id: 2, content: 'content2'},
      {id: 3, content: 'content3'},
      {id: 4, content: 'content4'},
      {id: 5, content: 'content5'},
    ]
  }

  deleteTodo = (id) => {
    
    const todos = this.state.todos.filter(todo => {
      // if the current ID is different return true
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    // Generate some rondom id
    todo.id = Math.random();

    // Create a new array with the current todos array
    // and add a new item: todo
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return(
      <div>
        <h1>Todos:</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
