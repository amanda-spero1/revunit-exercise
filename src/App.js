import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts/posts-index';
import PostDetail from './Posts/post-detail';
import './App.css';

let axios = require("axios");

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setError(false);
        setPosts(response.data)
        // console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log(error);
        setLoading(false);
      });

  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Posts posts={posts} />} />
          {posts.map((post) => {
            return <Route path={`/post-detail/${post.id}`
            } element={<PostDetail post={post} />} />
          })}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
