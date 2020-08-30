import React from "react";

import "./Card.css";

function Card2(props) {
    const { imageUrl, children } = props;
    return (
        <div className="Card">
        <div
            className="Card-cover"
            style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="Card-body">{children}</div>
        </div>
    );
}

export default Card2;