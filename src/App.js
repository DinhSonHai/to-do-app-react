import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      'Đi xem phim', 
      'Đi đá bóng', 
      'Đi chợ'
    ];
}
  render() {
    return (
      <div className="App">
            {
              this.todoItems.map((item, index) => <TodoItem key={ index } title={ item } />)
            }
          <img src="https://picsum.photos/200/300" alt=""></img>
      </div>
    );
  }
}

export default App;
