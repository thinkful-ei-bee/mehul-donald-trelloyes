import React from 'react';
import Card from './composition/card.js';
import List from './composition/list.js';
import STORE from './STORE.js';

function App(STORE) {
  // console.log(STORE.lists);
  let mappedList = STORE.lists.map(obj => {
    let header = obj.header;
    let newArray =[];
    for(let x = 0; x<obj.cardIds.length;x++){ 
      newArray.push(STORE.allCards[obj.cardIds[x]]);
    }
    return List(header,newArray);
    } 
    );
  mappedList.join('');
  return (
    <main className='App'>
      {mappedList}
    </main>
  );
}

export default App;