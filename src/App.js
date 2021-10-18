import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Dashboard from './components/DashBoard';
import ImageData from './components/ImageData'
import Footer from './components/Footer'
import './components/style.css'

const App = () => {


  return (
    < >
      <Header />
        <Route exact path="/"><Dashboard /></Route>
      <Switch>
        <Route  path="/images/:id" component={ImageData}></Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
