import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./navigation"
import Home from "./home";
import Dashboard from "./dashboard";
import Params from "./params";
export default class App extends React.Component{

  render(){
    return <Fragment>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/params' element={<Params />}/>
          </Routes>
        </Router> 
    </Fragment>
  }
}