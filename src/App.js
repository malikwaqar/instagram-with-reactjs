import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import { db } from './firebase';

function App() {
  const[posts, setPosts] = useState([]);

  useEffect (() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })
  }, []);
  return (
    <div className="app">
      <Header />
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} image={post.image} />
        ))
      }
    </div>
  );
}

export default App;
