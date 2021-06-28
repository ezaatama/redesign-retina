import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Homepage/Home'
import Service from './components/Services/Service'
import About from './components//About/About'
import Footer from './components/Footer/Footer'
import BackgroundBottom from './components/BottomSection'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' exact component={Service}/>
            <Route path='/about' exact component={About}/>
          </Switch>
          <BackgroundBottom />
          <Footer />
      </Router>
    </>
  );
}

export default App;
