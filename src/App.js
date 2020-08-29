import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Đi xem phim', isChecked: true, }, 
      { title: 'Đi đá bóng' }, 
      { title: 'Đi chợ' },
    ];
}
  render() {
    return (
      <div className="App">
            {
              this.todoItems.map((item, index) => 
                <TodoItem key={ index } item={ item } />
              )
            }
          <img src="https://picsum.photos/200/300" alt=""></img>
      </div>
    );
  }
}

export default App;
