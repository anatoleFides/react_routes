import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const BlogPage = () => {
   const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

  return (
  <div>
    <h1>Blogs</h1>
    {
      posts.map(post => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <li>{post.title}</li>
        </Link>
      ))
    }
    </div>
  )
}

export {BlogPage}