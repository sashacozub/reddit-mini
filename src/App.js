import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

import Header from './features/Header/Header';
import AllSubreddits from './features/AllSubreddits/AllSubreddits';

function App() {
  return (
    <React.Fragment>
      <Header />
      <aside>
        <AllSubreddits />
      </aside>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default App;
