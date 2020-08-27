import React from 'react'
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact'
import {Route} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import {Switch} from 'react-router-dom'
import Jeopardy from './components/Jeopardy'
import './App.css'

const errorPage = () =>{
  return ( <h3>
    'ERROR 404 PAGE NOT FOUND' </h3>)
}


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path = '/welcome/:name' 
      render = {(props)=> <Welcome {...props}name = {props.match.params.name}/>}/>
      <Route exact path = '/' 
      render = {(props)=> <Welcome {...props}name = 'Adam'/>}/>
      <Route path = '/clock' component = {Clock}/>
      <Route path = '/contact' component = {Contact}/>
      <Route path = '/jeopardy' component = {Jeopardy}/>
      <Route component = {errorPage}/>
      </Switch>
      <Navigation/>
      
    </div>
  )
}

export default App
