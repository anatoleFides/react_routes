import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const SinglPage = () => {
const {id} = useParams()
const navigate = useNavigate()
const [post, setPost] = useState((null))

const goBack = () => navigate(-1)
const goHome = () => navigate('/', {replace: true})

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
}, [id])

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>

      {post && (
        <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>

        <Link to={`/posts/${id}/edit`}>Edit to post</Link>
        </>
      )}
    </div>
  )
}

export {SinglPage}