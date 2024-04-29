import React from 'react'
import Header from './components/Header/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Body/Home';
import Pages from './components/Body/Pages';
import Blog from './components/Body/Blog';
import Shop from './components/Body/Shop';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>         
   <Router>
      <Header/>
        <Routes>
         <Route path='/React-Website' exact  Component={Home}/>
         <Route path='pages' exact  Component={Pages}/>
         <Route path='blog' exact  Component={Blog}/>
         <Route path='shop' exact  Component={Shop}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
