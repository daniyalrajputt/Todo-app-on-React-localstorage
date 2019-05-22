import React, { Component } from 'react';
import MainPage from './MainPage'
import ViewTodo from './viewtodo'
import './view.css'


class View extends Component {
  render() {
    return (
      <MainPage>


        <div className="container">
      <ViewTodo/>
        </div>

      </MainPage>
    );
  }
}

export default View;
