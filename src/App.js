import React, { Component } from 'react';
import './App.css';


//theres an extra bracket on line 21 thats not on the tut. 
class App extends Component {
    constructor(){
      super();
      this.state = {
        message: 'Hello Boyysss!!',
        newTodo: '',
        todos: [{
          title: 'Learn React',
          done: false
        }, {
          title: 'Learn JSX',
          done: false
          }]
        };
      }

      newTodoChanged(event) {
        this.setState({
          newTodo: event.target.value
        })
      };
    
      formSubmitted(event) {
        event.preventDefault();
        this.setState({
          todos: [...this.state.todos, {
            title: this.state.newTodo,
            done: false
          }]
        });
      }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
          <form onSubmit={(event) => this.formSubmitted(event)}>
            <label htmlFor="newTodo"> New Todo </label>
            <input onChange={(event)=>this.newTodoChanged(event)} id="newTodo" name="newTodo" />
            <button type = "submit">Add Todo</button>
          </form>

          <ul>
            {this.state.todos.map(todo => {
              return <li key = {todo.title}>{todo.title}</li>
              })}
          </ul>
      </div>
    );
  }
};

export default App;
