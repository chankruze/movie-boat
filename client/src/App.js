import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Home} />
          {/* Trending */}
          {/* <Route exact path="/trending" component={} /> */}
          {/* Browse */}
          {/* <Route exact path="/browse" component={} /> */}
          {/* About */}
          {/* <Route exact path="/about" component={} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
