import React from 'react'
import { Route, Switch,Redirect } from 'react-router-dom';

import Header from './components/Header'
import Dashboard from './components/DashBoard';
import ImageData from './components/ImageData'
import Footer from './components/Footer'
import './components/style.css'

const App = () => {


  return (
    < >
      <Header />
      <Switch>
        <Route exact path="/images"><Dashboard /></Route>
        <Route  path="/images/:id" component={ImageData}></Route>
        <Redirect to="/images" />

      </Switch>
      <Footer />
    </>
  )
}

export default App
