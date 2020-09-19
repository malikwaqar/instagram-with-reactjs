import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

function App() {
  const[posts, setPosts] = useState([
    {
      username: "waqaristic",
      caption: "Let's build react apps!",
      image: "https://hackernoon.com/images/z2xg2bpo.jpg",
    },
    {
      username: "waqar",
      caption: "My Dog!",
      image: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp",
    }, 
  ]);
  return (
    <div className="app">
      <Header />
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} image={post.image} />
        ))
      }
    </div>
  );
}

export default App;
