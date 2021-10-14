import React from 'react'
import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
