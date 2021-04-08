import React from 'react';

//components 
import PostList from './components/post.list';

//mock data to extract
import posts from './data/posts.json';
import users from './data/users.json';

const App = () => {
  return (
    <>

    <header className="App-Header">
    <h1>Blog Demo</h1>
    </header>
    <PostList posts={posts} />
    <PostList posts={posts} users={users}/>
    </>
  );
};

export default App;