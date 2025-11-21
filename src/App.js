import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './components/Home/HomePage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
