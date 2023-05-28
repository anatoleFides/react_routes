import {NavLink, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
  <div className='body-container'>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>

    <main className="container">
      <Outlet/>
    </main>

    <footer className="container">2023</footer>
  </div>
  )
}

export {Layout}