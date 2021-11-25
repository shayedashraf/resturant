import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import myStore from './redux/store';
import { provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </provider>

    </div>
  );
}

export default App;
