// make React available
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import STORE from './STORE';
import Card from './Card';
import List from './List';


describe('Smoke and Snapshot Testing for Trelloyes', ()=>{
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App store={STORE}/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('render the UI as expected', ()=>{
      const tree = renderer.create(<App store={STORE} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
  });