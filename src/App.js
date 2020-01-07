import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../src/styles/layout.scss"
import Footer from '../src/components/footer/Footer';
import Dashboard from '../src/components/dashboard/Dashboard';
import About from '../src/components/dashboard/About';
import Contact from '../src/components/dashboard/Contact';
import Portfolio from '../src/components/dashboard/Portfolio';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Dashboard />
      <Switch>
      <Route path='/about' component={About} />
       <Route path='/portfolio' component={Portfolio} />
       <Route path='/contact' component={Contact} />
      </Switch>
     <Footer />
     </BrowserRouter>
    )
  }
}

export default App
