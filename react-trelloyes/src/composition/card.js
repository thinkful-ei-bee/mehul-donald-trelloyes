import React from 'react';

function Card(title, content) {
    return (
        <div className="Card">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
  }

export default Card;