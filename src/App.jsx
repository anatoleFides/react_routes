import React from 'react-dom'
import {Routes, Route} from 'react-router-dom'

import {HomePage} from './pages/HomePage'
import {AboutPage} from './pages/AboutPage'
import {BlogPage} from './pages/BlogPage'
import {SinglPage} from './pages/SinglPage'
import {CreatePost} from './pages/CreatePost'
import {Editpost} from './pages/EditPost'
import {NotFoundPage} from './pages/NotFoundPage'
import {Layout} from './components/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="posts" element={<BlogPage/>} />
          <Route path="posts/:id" element={<SinglPage/>} />
          <Route path="posts/:id/edit" element={<Editpost/>} />
          <Route path="posts/new" element={<CreatePost/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
