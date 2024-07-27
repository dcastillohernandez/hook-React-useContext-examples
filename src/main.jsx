import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { MainApp } from './useContext/MainApp';

// import { Padre } from './usando-memo/Padre';
// import { PokeApp } from './pokemon-app/PokeApp';
// import { TodoApp } from './useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
)