import React from 'react';
import Card from './card.js';

function List(header, cards) {
    let mappedCards = cards.map(item => Card(item.title, item.content))
    mappedCards.join('');
    console.log(cards);
    return (
        <div className="App-list">
        <section className="List">
          <header className="List-header">
            <h2>{header}</h2>
          </header>
          <div className="List-cards">
          {mappedCards}
          </div>
        </section>
        </div>
    );
  }

export default List;