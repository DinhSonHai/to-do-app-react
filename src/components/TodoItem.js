import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import tick from '../img/tick.svg';
import success from '../img/success.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = success;
        if (item.isChecked) {
            url = tick;
        }
        
        return (
            <div className={ classNames('TodoItem', {
                'TodoItem--checked': item.isChecked
            }) }>
                <img onClick={ onClick } src={ url } width={ 32 } height={ 32 }></img>
                <p>{ item.title }</p>
            </div>
        );
    }
}

export default TodoItem;