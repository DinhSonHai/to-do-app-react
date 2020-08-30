import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const { imageUrl, children } = this.props;
        return (
            <div className="Card">
                <div className="Card-cover"
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="Card-body">{ children }</div>
            </div>
        );
    }
}

export default Card;