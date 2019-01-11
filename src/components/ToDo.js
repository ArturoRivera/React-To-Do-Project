import React, {Component} from 'react';

class ToDo extends Component {
    render(){
        return (
            <li>
            <input type="checkbox" defaultChecked={this.props.isCompleted} onChange={this.props.toggleComplete } />
            <span>{this.props.description}</span>
            <div onClick={this.props.deleteTodo}>Delete</div>
            </li>
        );
    }
}

export default ToDo;
