import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

import App from './App';
import ErrorPage from './features/ErrorPage/ErrorPage';
import SubredditPosts from './features/SubredditPosts/SubredditPosts';
import CommentsPage from './features/CommentsPage/CommentsPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<SubredditPosts />} />
            <Route path='/r/:subredditName' element={<SubredditPosts />} />
            <Route
              path='/r/:subredditName/comments/:postId'
              element={<CommentsPage />}
            />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
