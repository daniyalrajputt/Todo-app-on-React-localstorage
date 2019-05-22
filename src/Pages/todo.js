import React from 'react';
import '../index.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoValue: '',
            todos: JSON.parse(localStorage.getItem('todos')),
        }
    }
    inputHandler(event) {
        this.setState({ todoValue: event.target.value })
    }
    add() {
        let title = this.state.todoValue;
        // console.log(title);
        if (localStorage.getItem('todos') == null) {
            let todos = [];
            todos.push(title);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        else {
            let todos = JSON.parse(localStorage.getItem('todos'));
            todos.push(title);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        this.setState({
            todos: JSON.parse(localStorage.getItem('todos')),
            todoValue: ''
        });
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="text-center">What will you do Today.?</h1>
                <input className="form-control" type="text" ref="title" value={this.state.todoValue} onChange={this.inputHandler.bind(this)} />
                <input className="btn btn-lg btn-success" type="button" value="Add" onClick={this.add.bind(this)} />
            </div>
        )
    }
}

export default Todo;
