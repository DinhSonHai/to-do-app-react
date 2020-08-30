import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import checklist from '../src/img/checklist.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';
import Accordion from './components/Accordion';
import WeeklySongListItem from './components/WeeklySongListItem'; 
import Card from './components/Card';
import Card2 from './components/Card2';

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
          { title: 'Đi đá bóng', isChecked: false }, 
          { title: 'Đi chợ', isChecked: false },
        ]
    };
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onAllClick = this.onAllClick.bind(this);
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

  onAllClick(event) {
    this.state.todoItems.map((item) => {
      item.isChecked = true;
    })
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
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        todoItems: [
          { title: text,
            isChecked: false, },
          ...this.state.todoItems
        ]
      });
      event.target.value = '';
    }
  }

  render() {
    const { currentColor, todoItems } = this.state;
    return (
      <Router>
        <div className="App">
          <div><Link to="/Card">Xem class component</Link></div>
          <div><Link to="/Card2">Xem function component</Link> </div>
          {/* <TrafficLight currentColor={ currentColor } /> */}
          {/* <Accordion heading="Heading">
            Hello World
          </Accordion> */}
          {/* <WeeklySongListItem
            order="01"
            title="Em không thể"
            singer="Tiên Tiên"
            viewCount="3000" /> */}
          {/* <div className="Header">
            <img className="Img" src={ checklist } width={ 32 } height={ 32 } onClick={ this.onAllClick }></img>
            <input type="text" placeholder="Add a new item" onKeyUp={ this.onKeyUp }></input>
          </div>
          {
            todoItems.length > 0 && todoItems.map((item, index) => 
              <TodoItem key={ index } item={ item } onClick={ this.onItemClick(item) } />
            )
          }
          {
            todoItems.length === 0 && 'Nothing here'
          } */}
          {/* <img src="https://picsum.photos/200/300" alt=""></img> */}
          <Route path="/Card">
            <Card imageUrl="https://picsum.photos/200/300">
              <p>Card body</p>
            </Card>
          </Route>
          <Route path="/Card2">
            <Card2 imageUrl="https://picsum.photos/200/350">
              <p>Card 2 body</p>
            </Card2>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
