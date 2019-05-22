import React from 'react';
import './view.css'


class ViewTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: JSON.parse(localStorage.getItem('todos')),
            editTodoTitle: "",
            editTodoIndex: ""
        }
    }
    delete(e) {
        let index = e.target.getAttribute('data-key');
        let list = JSON.parse(localStorage.getItem('todos'));
        list.splice(index, 1);
        this.setState({
            todos: list
        });
        localStorage.setItem('todos', JSON.stringify(list));

    }
    edit(e) {
        let index = e.target.getAttribute('data-key');
        this.setState({
            editTodoTitle: this.state.todos[index],
            editTodoIndex: e.target.getAttribute('data-key')
        })
        // console.log(this.state.todos[index], "this");

    }
    deleteAll() {
        let deleteArray = JSON.parse(localStorage.getItem('todos'));
        deleteArray.splice(0, deleteArray.length);
        localStorage.setItem('todos', JSON.stringify(deleteArray));
        this.setState({
            // todos: deleteArray,
            todos: JSON.parse(localStorage.getItem('todos'))
        });
        console.log(deleteArray)
        // localStorage.clear();
        // list.splice(0, list.length)
    }

    inputHandler(event) {
        this.setState({ editTodoTitle: event.target.value })
    }
    save(e) {
        console.log(this.state.editTodoTitle, this.state.editTodoIndex);
        let list = JSON.parse(localStorage.getItem('todos'));
        list[this.state.editTodoIndex] = this.state.editTodoTitle;
        localStorage.setItem('todos', JSON.stringify(list));
        this.setState({
            todos: JSON.parse(localStorage.getItem('todos')),
        })
        console.log(list);
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Todo List</h1>
                <input className="btn btn-danger btn-lg deleteAll" type="button" value="Delete All" onClick={this.deleteAll.bind(this)} />
                <ul className="list-group">
                    {this.state.todos.map((todos, index) => {
                        return (
                            <li className="list-group-item list-group-item-action"
                                key={index}>{todos}
                                <div className="buttons">
                                    <input className="btn btn-info" type="button" className="btn btn-primary" data-target="#exampleModal" value="Edit" data-toggle="modal" onClick={this.edit.bind(this)} data-key={index} />
                                    <input className="btn btn-danger" type="button" value="Delete" onClick={this.delete.bind(this)} data-key={index} />
                                </div>
                            </li>
                        )
                    })}
                </ul>


                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">EDIT</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Title
                              </p>
                                <input className="form-control" type="text" ref="title" value={this.state.editTodoTitle} onChange={this.inputHandler.bind(this)} />


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.save.bind(this)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ViewTodo;
