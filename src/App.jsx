import { useState } from 'react'
import "./assets/index.css"
import HomePage from './pages/HomePage'
import { Routes ,Route } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'
import UpcomingPage from './pages/UpcomingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/projects' element={<ProjectPage/>} />
        <Route path='/upcomingprojects' element={<UpcomingPage/>} />
      </Routes>
    </>
  )
}

export default App
