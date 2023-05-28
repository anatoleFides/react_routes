import React from 'react-dom'
import {Routes, Route, Navigate} from 'react-router-dom'

import {HomePage} from './pages/HomePage'
import {AboutPage} from './pages/AboutPage'
import {BlogPage} from './pages/BlogPage'
import {SinglPage} from './pages/SinglPage'
import {CreatePost} from './pages/CreatePost'
import {Editpost} from './pages/EditPost'
import {NotFoundPage} from './pages/NotFoundPage'
import {LoginPage} from './pages/LoginPage'

import {Layout} from './components/Layout'

import {RequireAuth} from './hoc/RequireAuth'
import {AuthProvider} from './hoc/AuthProvider'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglPage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
    </div>
  );
}

export default App;
