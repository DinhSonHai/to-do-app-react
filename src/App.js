import React, { Component } from 'react';
import logo from './logo.svg';
import checklist from '../src/img/checklist.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
        currentColor: RED,
        todoItems: [
          { title: 'Đi xem phim', isChecked: true, }, 
          { title: 'Đi đá bóng', isChecked: true }, 
          { title: 'Đi chợ' },
        ]
    };
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
    this.onItemClick = this.onItemClick.bind(this);
  }

  getNextColor(color) {
    switch(color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  onItemClick(item) {
    return (event) => {
      const isChecked = item.isChecked;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isChecked: !isChecked,
          },
          ...todoItems.slice(index + 1),
        ]
      })
    }
  }

  onKeyUp(event) {
    console.log(event);
  }

  render() {
    const { currentColor, todoItems } = this.state;
    return (
      <div className="App">
            {/* <TrafficLight currentColor={ currentColor } /> */}
            <div className="Header">
              <img src={ checklist } width={ 32 } height={ 32 }></img>
              <input type="text" placeholder="Add a new item" onKeyUp={ this.onKeyUp }></input>
            </div>
            {
              todoItems.length > 0 && todoItems.map((item, index) => 
                <TodoItem key={ index } item={ item } onClick={ this.onItemClick(item) } />
              )
            }
            {
              todoItems.length === 0 && 'Nothing here'
            }
          {/* <img src="https://picsum.photos/200/300" alt=""></img> */}
      </div>
    );
  }
}

export default App;
