import React, { Component } from 'react';
import ToDo from './components/ToDo.js';
import './App.css';

class App extends Component {
    
    constructor(){
        super();

        this.state = {
            todos: [
                {description: 'Walk it like I talk it', isCompleted: true},
                {description: 'Yes Indeed', isCompleted: false},
                {description: 'Childs Play', isCompleted: false}
            ]
        };
        
        this.deleteMessage = this.deleteMessage.bind(this);
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
                            deleteMessage={this.deleteMessage}
                        />
                    )
                }
            </ul>
          </div>
        );
    }
}

export default App;

