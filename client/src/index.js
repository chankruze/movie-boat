import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './client'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Movie from './components/Pages/Movie/Movie'

const Root = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
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
        <Route exact path="/movie/:movie_id" component={Movie} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('react-root'))

if (module.hot) {
  module.hot.accept()
}

