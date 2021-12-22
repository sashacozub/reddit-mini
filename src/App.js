import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </React.Fragment>
  );
}

export default App;
