import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./navigation"
import Home from "./home";
import Dashboard from "./dashboard";
import Save from "./save";
export default class App extends React.Component{

  render(){
    return <Fragment>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/save' element={<Save />}/>
          </Routes>
        </Router> 
    </Fragment>
  }
}