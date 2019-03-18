import React from 'react';
import Card from './composition/card.js';
import List from './composition/list.js';
import STORE from './STORE.js';

function App(STORE) {
  // console.log(STORE);
  let mappedList = STORE.lists.map(function() {
    let header = this.header;
    let cards = this.cardIds.find(x => x === STORE.allCards[x]);
    return List(header,cards);
    } 
    );
  mappedList.lists.join('');
  return (
    <main className='App'>
      {mappedList}
    </main>
  );
}

export default App;