import React, { Component } from 'react';
import Todo from './todo'
import MainPage from './MainPage'
import './add.css'


class AddTodo extends Component {
    render() {
        return (
            <MainPage>


                <div className="container">
                    <Todo />
                </div>

            </MainPage>
        );
    }
}

export default AddTodo;
