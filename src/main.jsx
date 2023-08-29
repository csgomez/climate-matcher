import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GameProvider from './contexts/GameContext.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GameProvider>
        <App />
      </GameProvider>
    </Provider>
  </React.StrictMode>
);
