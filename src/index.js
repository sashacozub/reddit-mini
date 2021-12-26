import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import ErrorPage from './features/ErrorPage/ErrorPage';
import SubredditPosts from './features/SubredditPosts/SubredditPosts';
import Comments from './features/Comments/Comments';

import './index.css';

import App from './App';

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
              element={<Comments />}
            />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
