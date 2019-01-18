import React, { Component } from 'react';
import ToDo from './components/ToDo.js';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [
              {description: 'Walk The Dog', isCompleted: true},
              {description: 'Clean Your Room', isCompleted: false},
              {description: 'Finish Bloc Assignments', isCompleted: false}
            ],
            newTodoDescription: ''
        };
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(index) {
      const todos2 = this.state.todos.filter((deletedItem, i) => i !== index);

      this.setState({todos: todos2});
    }

    handleChange(e){
      this.setState({ newTodoDescription: e.target.value});
    }

    handleSubmit(e){
      e.preventDefault();
      if (!this.state.newTodoDescription) {return}
      const newTodo = {description: this.state.newTodoDescription, isCompleted: false};
      this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: ''});
    }

    toggleComplete(index){
      const todos = this.state.todos.slice();
      const todo = todos[index];
      todo.isCompleted = todo.isCompleted ? false : true;
      this.setState({todos: todos});
    }

    render() {
        return (
          <div className="App">
            <ul>
                {
                    this.state.todos.map((todo, index) => (
                      <ToDo
                          key={`${todo.description.toLowerCase().replace(/ /g, '-')}-${index}`}
                          description={todo.description}
                          isCompleted={todo.isCompleted}
                          toggleComplete={ () => this.toggleComplete(index)}
                          deleteTodo={() => this.deleteTodo(index)}

                      />
                    ))
                }
            </ul>
            <form onSubmit={ (e) => this.handleSubmit(e) }>
              <input type="text" value={ this.state.newTodoDescription} onChange={ (e) => this.handleChange(e)} />
              <input type="submit" />
            </form>
          </div>
        );
    }
}

export default App;
