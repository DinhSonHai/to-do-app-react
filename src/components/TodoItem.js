import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import tick from '../img/tick.svg';
import success from '../img/success.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = tick;
        if (item.isChecked) {
            url = success;
        }
        
        return (
            <div className={ classNames('TodoItem', {
                'TodoItem--checked': item.isChecked
            }) }>
                <img className="ItemImage" onClick={ onClick } src={ url } width={ 32 } height={ 32 }></img>
                <p>{ item.title }</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isChecked: PropTypes.bool,
        title: PropTypes.string,
    }),
    onClick: PropTypes.func
};

export default TodoItem;