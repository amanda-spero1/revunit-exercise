import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Posts from './Posts/posts-index';
import PostDetail from './Posts/post-detail';
import NavSidebar from './NavSidebar/nav-sidebar-index'
import PostsByUser from './PostsByUser/posts-by-user-index'
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

  if (error) {
    return <div>Error Please Try Again</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavSidebar />
        <Routes>
          <Route exact path="/" element={<Posts posts={posts} />} />
          {posts.map((post) => {
            return <Route path={`/post-detail/${post.id}`
            } element={<PostDetail post={post} />} />
          })}
          <Route path="/posts-by-user" element={<PostsByUser />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
