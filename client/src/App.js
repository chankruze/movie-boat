import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
