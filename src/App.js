import React  from 'react';

import './App.css';
import Header from './components/Header/index';
import Routes from './routes'


function App() {
  return (
    <div className="container">
      <Header tittle="Login" />
      <Routes/>
    </div>
  );
}

export default App;
