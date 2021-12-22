const API_ROOT = 'https://www.reddit.com';

export const getAllSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const jsonResponse = await response.json();

  return jsonResponse.data.children.map((subreddit) => subreddit.data);
};

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const jsonResponse = await response.json();

  return jsonResponse.data.children.map((post) => post.data);
};
