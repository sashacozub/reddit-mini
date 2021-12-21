import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

import Header from './features/Header/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
