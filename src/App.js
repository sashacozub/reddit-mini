import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

import Header from './features/Header/Header';
import SubredditsList from './features/SubredditsList/SubredditsList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <aside>
        <SubredditsList />
      </aside>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default App;
