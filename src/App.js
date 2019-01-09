import React, { Component } from 'react';
import ToDo from './components/ToDo.js';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [
                {description: 'Walk the dog', isCompleted: true},
                {description: 'Clean your room', isCompleted: false},
                {description: 'Finish Bloc assignments', isCompleted: false}
            ],
            newTodoDescription: ''
        };

       this.deleteMessage = this.deleteMessage.bind(this);
    }

    handleChange(e){
      this.setState({ newTodoDescription: e.target.value})
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


    deleteMessage() {
        this.setState({ todos:[] })
    }


    render() {
        return (
          <div className="App">
            <ul>
                {
                    this.state.todos.map((todo, index) =>
                        <ToDo
                            key={index}
                            description={todo.description}
                            isCompleted={todo.isCompleted}
                            toggleComplete={ () => this.toggleComplete(index)}
                            deleteMessage={this.deleteMessage}
                        />
                    )
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
