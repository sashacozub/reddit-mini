# redditMini

This is a light version of [Reddit](https://www.reddit.com/) made as a final portfolio project for Frontend Developer path from [Codecademy.com](https://www.codecademy.com/).
<br/>

- Live demo can be found [here](https://reddit-mini-sc.netlify.app/).

## Project's aim

Tha aim of this project was to solidify knowledge and practice in building an app with React, React Router and specifically Redux and Redux Toolkit.

## App description

This app was created using a simple version of [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON) that does not require an OAuth workflow. It has a limited functionality, but it does not require any API keys to be used, which allowed me to focus on the main reason of the project - create an app that uses Redux for global state management.
<br/>
This application fetches a predefined list of subreddits(categories) that the user can choose to see the posts from. After loading the selected subreddit, the user then can choose to open any specific post and the comments for that post will be fetched, along with some extra information: post rating, author, post date.

## Technologies Used

- ReactJS with Hooks
- React Router V6
- Redux / Redux Toolkit
- Javascript
- AJAX
- HTML5
- CSS3

## Screenshots

<img src="https://i.imgur.com/b7dY6vB.png" alt="" width="300"/> <img src="https://i.imgur.com/B8naVdv.png" alt="" width="600"/>

## Project Status

The first version of the project is complete, all the main features are up and running.
Due to limitations of the API used, I have yet to discover some way to adjust images and videos for performance improvement, if possible.

## Room for Improvement

_Potential improvements:_

- The app performace could be improved by adjusting the media content sizes in order to reduce the amount of data needed to download.
- As one of the solutions for the first point is to implement a so called infinite scroll in order to fetch limited amount of data first and then load in more when scrolling down the page.

_To do:_

- Add a different functionality for "comments" button in order to load in the comments without opening the post on a separate page.
- Change "Search" field to look for the searched term from the whole website instead of just currently loaded posts.
- Add an animation, "skeleton" for the data that is being fetched instead of boring "Loading..."
